import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const ShopScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>Shop</Text>
    </View>
  );
};

ShopScreen.navigationOptions = {
  headerTitle: 'Shop'
};

export default ShopScreen;
