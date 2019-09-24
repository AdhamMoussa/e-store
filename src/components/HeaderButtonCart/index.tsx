import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import { defaultTheme } from '../../utils/themes';

import CustomHeaderButton from '../HeaderButton';
import { AppState } from '../../store';

interface IProps {
  onPress: () => void;
}

const HeaderButtonCart: React.FC<IProps> = ({ onPress }) => {
  const { cartList } = useSelector((state: AppState) => state.cart);

  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="md-cart"
        buttonStyle={{ color: defaultTheme.colors.light, marginHorizontal: 0 }}
        title="Cart"
        onPress={onPress}
      />

      <Item
        title={cartList.length.toString()}
        buttonStyle={{
          color: defaultTheme.colors.secondary
        }}
      />
    </HeaderButtons>
  );
};

export default HeaderButtonCart;
