import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { defaultTheme } from '../../utils/themes';

const LoadingSpinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator color={defaultTheme.colors.secondary} size="large" />
    </View>
  );
};

export default LoadingSpinner;
