import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../components/CartItem';
import CartItemTotals from '../../components/CartItemTotals';

import { AppState } from '../../store';
import { removeFromCart } from '../../store/cart/actions';
import { ICartItem } from '../../store/cart/types';

import { Product } from '../../models/product';

import { styles } from './styles';

const CartScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { cartList } = useSelector((state: AppState) => state.cart);

  const dispatch = useDispatch();

  const totalCartAmount: number = cartList.reduce(
    (a: number, b: ICartItem): number => a + b.product.price * b.qty,
    0
  );

  const removeFromCartHandler = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  const navigateToProductScreen = (product: Product): void => {
    navigation.navigate({
      routeName: 'Product',
      params: { product }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList
          data={cartList}
          keyExtractor={({ product }) => product.id}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              removeFromCart={() => {
                removeFromCartHandler(item.product.id);
              }}
              navigateToProductScreen={() => {
                navigateToProductScreen(item.product);
              }}
            />
          )}
        />
      </View>

      <View style={styles.cartTotals}>
        <CartItemTotals total={totalCartAmount} />
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'My Cart'
};

export default CartScreen;
