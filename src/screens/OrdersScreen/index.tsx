import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const OrdersScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>Orders</Text>
    </View>
  );
};

OrdersScreen.navigationOptions = {
  headerTitle: 'My Orders'
};

export default OrdersScreen;
