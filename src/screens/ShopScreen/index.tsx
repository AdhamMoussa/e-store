import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/ProductItem';
import HeaderButtonCart from '../../components/HeaderButtonCart';
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

  useEffect(() => {
    setIsLoading(true);

    dispatch(apiGetProducts())
      .then(() => {
        setIsLoading(false);
      })

      .catch(() => {
        setIsLoading(false);
        setError("Couldn't fetch products. try again..!!");
      });
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
    <HeaderButtonCart
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
