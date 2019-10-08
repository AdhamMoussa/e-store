import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../HeaderButton';

import { AppState, ThunkDispatchType } from '../../store';
import { logout } from '../../store/user/operations';

import { defaultTheme } from '../../utils/themes';

interface IProps {
  onPress: () => void;
}

const HeaderButtonCart: React.FC<IProps> = ({ onPress }) => {
  const dispatch = useDispatch<ThunkDispatchType>();

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
