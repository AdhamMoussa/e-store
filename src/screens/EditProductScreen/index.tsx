import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const EditProductScreen: NavigationStackScreenComponent = () => {
  return (
    <View>
      <Text>Edit Product</Text>
    </View>
  );
};

EditProductScreen.navigationOptions = {
  headerTitle: 'Edit Product'
};

export default EditProductScreen;
