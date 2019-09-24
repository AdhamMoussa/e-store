import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  Button,
  Alert
} from 'react-native';

import { Product } from '../../models/product';

import { defaultTheme } from '../../utils/themes';

import { styles } from './styles';

interface IProps {
  product: Product;
  navigateToProductScreen: () => void;
  addToCart: () => void;
}

const ProductItem: React.FC<IProps> = props => {
  const {
    product: { title, imageUrl, price },
    navigateToProductScreen,
    addToCart
  } = props;

  return (
    <TouchableNativeFeedback onPress={navigateToProductScreen} useForeground>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.footer}>
          <View style={styles.footerInfo}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.price}>${price}</Text>
          </View>

          <View style={styles.footerBtn}>
            <Button
              title="Add to Cart"
              color={defaultTheme.colors.dark}
              onPress={addToCart}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProductItem;
