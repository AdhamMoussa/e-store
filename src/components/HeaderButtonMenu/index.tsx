import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../HeaderButton';

import { defaultTheme } from '../../utils/themes';

interface IProps {
  onPress: () => void;
}

const HeaderButtonMenu: React.FC<IProps> = ({ onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="md-menu"
        title="Menu"
        buttonStyle={{ color: defaultTheme.colors.light }}
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

export default HeaderButtonMenu;
