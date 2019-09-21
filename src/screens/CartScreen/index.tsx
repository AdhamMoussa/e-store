import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const CartScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: 'My Cart'
};

export default CartScreen;
