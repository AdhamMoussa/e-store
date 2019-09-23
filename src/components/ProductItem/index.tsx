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
}

const ProductItem: React.FC<IProps> = props => {
  const {
    product: { title, imageUrl, price }
  } = props;

  return (
    <TouchableNativeFeedback onPress={() => Alert.alert('details')}>
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
              onPress={() => Alert.alert('add to cart')}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProductItem;
