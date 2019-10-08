import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';

import HeaderButtonRight from '../../components/HeaderButtonRight';

import { addToCart } from '../../store/cart/actions';

import { Product } from '../../models/product';

import { defaultTheme } from '../../utils/themes';

import { styles } from './styles';

const ProductScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const product: Product = navigation.getParam('product');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price:</Text>
        <Text style={styles.priceAmount}>${product.price}</Text>
      </View>

      <Text style={styles.description}>{product.description}</Text>

      <View>
        <Button
          title="Add to Cart"
          color={defaultTheme.colors.dark}
          onPress={() => {
            dispatch(addToCart(product));
          }}
        />
      </View>
    </View>
  );
};

ProductScreen.navigationOptions = navProps => {
  const product: Product = navProps.navigation.getParam('product');

  return {
    headerTitle: product.title,

    headerRight: (
      <HeaderButtonRight
        onPress={() => {
          navProps.navigation.navigate({
            routeName: 'Cart'
          });
        }}
      />
    )
  };
};

export default ProductScreen;
