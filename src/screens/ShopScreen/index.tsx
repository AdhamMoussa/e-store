import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/ProductItem';

import { AppState } from '../../store';

import { styles } from './styles';

const ShopScreen: NavigationStackScreenComponent = () => {
  const { productList } = useSelector((state: AppState) => state.products);

  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

ShopScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ShopScreen;
