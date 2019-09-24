import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { defaultTheme } from '../../utils/themes';

interface IProps {
  total: number;
}

const CartItemTotals: React.FC<IProps> = ({ total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Amount</Text>

      <Text style={styles.amount}>${total}</Text>

      <View style={styles.btn}>
        <Button
          title="Checkout"
          color={defaultTheme.colors.dark}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default CartItemTotals;
