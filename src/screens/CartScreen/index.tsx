import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid';

import CartItem from '../../components/CartItem';
import CartItemTotals from '../../components/CartItemTotals';
import EmptyMsg from '../../components/EmptyMsg';

import { AppState } from '../../store';
import { removeFromCart, clearCart } from '../../store/cart/actions';
import { addOrder } from '../../store/orders/actions';
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

  const checkoutHandler = () => {
    dispatch(
      addOrder({
        id: uuid(),
        date: new Date(),
        items: cartList,
        totalPrice: totalCartAmount
      })
    );

    dispatch(clearCart());
  };

  const navigateToProductScreen = (product: Product): void => {
    navigation.navigate({
      routeName: 'Product',
      params: { product }
    });
  };

  if (cartList.length === 0) {
    return <EmptyMsg>No Items Added...</EmptyMsg>;
  }

  return (
    <View>
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
        <CartItemTotals total={totalCartAmount} onCheckout={checkoutHandler} />
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'My Cart'
};

export default CartScreen;
