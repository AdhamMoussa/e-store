import React from 'react';
import {
  HeaderButton,
  HeaderButtonProps
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton: React.FC<HeaderButtonProps> = props => {
  return <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} />;
};

export default CustomHeaderButton;
