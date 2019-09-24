import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  Button
} from 'react-native';

import { ICartItem } from '../../store/cart/types';

import { defaultTheme } from '../../utils/themes';

import { styles } from './styles';

interface IProps {
  item: ICartItem;
  navigateToProductScreen: () => void;
  removeFromCart: () => void;
}

const CartItem: React.FC<IProps> = props => {
  const {
    item: {
      product: { title, imageUrl, price },
      qty
    },
    navigateToProductScreen,
    removeFromCart
  } = props;

  return (
    <TouchableNativeFeedback onPress={navigateToProductScreen} useForeground>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.cardDetails}>
          <View style={styles.info}>
            <View>
              <Text numberOfLines={1} style={styles.title}>
                {title}
              </Text>

              <Text style={styles.price}>Price: ${price}</Text>
              <Text style={styles.quantity}>Quantity: {qty}</Text>
              <Text style={styles.total}>Sub Total ${price * qty}</Text>
            </View>
          </View>

          <View style={styles.removeBtn}>
            <Button
              title="Remove"
              color={defaultTheme.colors.dark}
              onPress={removeFromCart}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CartItem;
