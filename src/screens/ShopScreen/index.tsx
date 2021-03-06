import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/ProductItem';
import HeaderButtonRight from '../../components/HeaderButtonRight';
import HeaderButtonMenu from '../../components/HeaderButtonMenu';
import LoadingSpinner from '../../components/LoadingSpinner';

import { AppState, ThunkDispatchType } from '../../store';
import { addToCart } from '../../store/cart/actions';
import { apiGetProducts } from '../../store/products/operations';

import { Product } from '../../models/product';

import { styles } from './styles';

const ShopScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { productList } = useSelector((state: AppState) => state.products);

  const dispatch = useDispatch<ThunkDispatchType>();

  const navigateToProductScreen = (product: Product): void => {
    navigation.navigate({
      routeName: 'Product',
      params: { product }
    });
  };

  const addToCartHandler = (product: Product): void => {
    dispatch(addToCart(product));
  };

  const getProducts = () => {
    dispatch(apiGetProducts())
      .then(() => {
        setIsLoading(false);
      })

      .catch(() => {
        setIsLoading(false);
        setError("Couldn't fetch products. try again..!!");
      });
  };

  useEffect(() => {
    setIsLoading(true);

    getProducts();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={getProducts}
        refreshing={isLoading}
        data={productList}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            addToCart={() => {
              addToCartHandler(item);
            }}
            navigateToProductScreen={() => {
              navigateToProductScreen(item);
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

ShopScreen.navigationOptions = navProps => ({
  headerTitle: 'All Products',

  headerRight: (
    <HeaderButtonRight
      onPress={() => {
        navProps.navigation.navigate({
          routeName: 'Cart'
        });
      }}
    />
  ),
  headerLeft: () => (
    <HeaderButtonMenu
      onPress={() => {
        navProps.navigation.toggleDrawer();
      }}
    />
  )
});

export default ShopScreen;
