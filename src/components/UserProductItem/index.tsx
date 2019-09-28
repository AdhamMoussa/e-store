import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  Button
} from 'react-native';

import { Product } from '../../models/product';

import { defaultTheme } from '../../utils/themes';

import { styles } from './styles';

interface IProps {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
}

const UserProductItem: React.FC<IProps> = props => {
  const {
    product: { title, imageUrl, price },
    onEdit,
    onDelete
  } = props;

  return (
    <TouchableNativeFeedback onPress={onEdit} useForeground>
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
              title="Edit"
              color={defaultTheme.colors.dark}
              onPress={onEdit}
            />
          </View>

          <View style={styles.footerBtn}>
            <Button
              title="Delete"
              color={defaultTheme.colors.dark}
              onPress={onDelete}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default UserProductItem;
