import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';

import OrderItem from '../../components/OrderItem';
import EmptyMsg from '../../components/EmptyMsg';
import HeaderButtonMenu from '../../components/HeaderButtonMenu';
import LoadingSpinner from '../../components/LoadingSpinner';

import { AppState, ThunkDispatchType } from '../../store';
import { apiGetOrders } from '../../store/orders/operations';

const OrdersScreen: NavigationStackScreenComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch<ThunkDispatchType>();

  const { orderList } = useSelector((state: AppState) => state.orders);

  const getOrders = () => {
    setIsLoading(true);

    dispatch(apiGetOrders())
      .then(() => {
        setIsLoading(false);
      })

      .catch(() => {
        setError('Error... pull to refresh!');
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (orderList.length === 0) {
    return <EmptyMsg>No Orders yet...</EmptyMsg>;
  }

  return (
    <View>
      <FlatList
        refreshing={isLoading}
        onRefresh={getOrders}
        data={orderList}
        renderItem={({ item }) => <OrderItem order={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

OrdersScreen.navigationOptions = navProps => ({
  headerTitle: 'My Orders',
  headerLeft: () => (
    <HeaderButtonMenu
      onPress={() => {
        navProps.navigation.toggleDrawer();
      }}
    />
  )
});

export default OrdersScreen;
