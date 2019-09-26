import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import HeaderButtonMenu from '../../components/HeaderButtonMenu';

const UserProductsScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>User Products</Text>
    </View>
  );
};

UserProductsScreen.navigationOptions = navProps => ({
  headerTitle: 'My Products',
  headerLeft: () => (
    <HeaderButtonMenu
      onPress={() => {
        navProps.navigation.toggleDrawer();
      }}
    />
  )
});

export default UserProductsScreen;
