import React from 'react';
import { View, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/ProductItem';
import HeaderButtonCart from '../../components/HeaderButtonCart';

import { AppState } from '../../store';
import { addToCart } from '../../store/cart/actions';

import { Product } from '../../models/product';

import { styles } from './styles';

const ShopScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { productList } = useSelector((state: AppState) => state.products);

  const dispatch = useDispatch();

  const navigateToProductScreen = (product: Product): void => {
    navigation.navigate({
      routeName: 'Product',
      params: { product }
    });
  };

  const addToCartHandler = (product: Product): void => {
    dispatch(addToCart(product));
  };

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
  )
});

export default ShopScreen;
