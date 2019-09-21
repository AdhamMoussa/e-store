import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const UserProductsScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>User Products</Text>
    </View>
  );
};

UserProductsScreen.navigationOptions = {
  headerTitle: 'My Products'
};

export default UserProductsScreen;
