import React, { useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import CartItem from '../../components/CartItem';
import CartItemTotals from '../../components/CartItemTotals';
import EmptyMsg from '../../components/EmptyMsg';
import LoadingSpinner from '../../components/LoadingSpinner';

import { AppState, ActionsType } from '../../store';
import { removeFromCart, clearCart } from '../../store/cart/actions';
import { apiAddOrder } from '../../store/orders/operations';
import { ICartItem } from '../../store/cart/types';

import { Product } from '../../models/product';

import { styles } from './styles';

const CartScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { cartList } = useSelector((state: AppState) => state.cart);

  const dispatch = useDispatch<ThunkDispatch<AppState, null, ActionsType>>();

  const totalCartAmount: number = cartList.reduce(
    (a: number, b: ICartItem): number => a + b.product.price * b.qty,
    0
  );

  const removeFromCartHandler = (id: string): void => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    setIsLoading(true);

    dispatch(
      apiAddOrder({
        date: new Date(),
        items: cartList,
        totalPrice: totalCartAmount
      })
    )
      .then(() => {
        dispatch(clearCart());
        setIsLoading(false);
        Alert.alert('Success', 'Your order is sent successfully..');
      })

      .catch(() => {
        setIsLoading(false);
        Alert.alert('Error', 'Could not send your order!! try again');
      });
  };

  const navigateToProductScreen = (product: Product): void => {
    navigation.navigate({
      routeName: 'Product',
      params: { product }
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
