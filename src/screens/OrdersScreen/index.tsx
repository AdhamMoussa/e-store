import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/OrderItem';
import EmptyMsg from '../../components/EmptyMsg';

import { AppState } from '../../store';

const OrdersScreen: NavigationStackScreenComponent = () => {
  const { orderList } = useSelector((state: AppState) => state.orders);

  if (orderList.length === 0) {
    return <EmptyMsg>No Orders yet...</EmptyMsg>;
  }

  return (
    <View>
      <FlatList
        data={orderList}
        renderItem={({ item }) => <OrderItem order={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

OrdersScreen.navigationOptions = {
  headerTitle: 'My Orders'
};

export default OrdersScreen;
