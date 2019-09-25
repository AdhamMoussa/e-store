import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const EmptyMsg: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default EmptyMsg;
