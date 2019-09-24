import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/ProductItem';

import { AppState } from '../../store';
import { Product } from '../../models/product';

import { styles } from './styles';

const ShopScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { productList } = useSelector((state: AppState) => state.products);

  const navigateToProductScreen = (product: Product): void => {
    navigation.navigate({
      routeName: 'Product',
      params: { product }
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            navigateToProductScreen={() => {
              navigateToProductScreen(item);
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

ShopScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ShopScreen;
