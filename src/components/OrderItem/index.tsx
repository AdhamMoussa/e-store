import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  Button,
  FlatList
} from 'react-native';
import * as dateFns from 'date-fns';

import { IOrder } from '../../store/orders/types';

import { defaultTheme } from '../../utils/themes';

import { styles } from './styles';

interface IProps {
  order: IOrder;
}

const OrderItem: React.FC<IProps> = props => {
  const { order } = props;

  const [isExpanded, setExpandState] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.date}>
        {dateFns.format(order.date, 'mm/dd/yyyy')}
      </Text>

      <Text numberOfLines={1} style={styles.id}>
        Tracking ID: {order.id}
      </Text>

      {isExpanded && (
        <View style={styles.detailsContainer}>
          <FlatList
            data={order.items}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.cartItemTitle}>{item.product.title}</Text>
                <Text style={styles.cartItemPrice}>
                  ${item.product.price} X {item.qty} = $
                  {item.product.price * item.qty}
                </Text>
              </View>
            )}
            keyExtractor={({ product }) => product.id}
          />
        </View>
      )}

      <Text style={styles.total}>Total Price: ${order.totalPrice}</Text>

      {!isExpanded && (
        <TouchableNativeFeedback
          onPress={() => setExpandState(state => !state)}
        >
          <View style={styles.viewBtn}>
            <Text style={styles.viewBtnText}>View</Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
};

export default OrderItem;
