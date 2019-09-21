import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const AddProductScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>Add Product</Text>
    </View>
  );
};

AddProductScreen.navigationOptions = {
  headerTitle: 'Add a Product'
};

export default AddProductScreen;
