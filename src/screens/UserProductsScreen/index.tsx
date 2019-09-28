import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButtonMenu from '../../components/HeaderButtonMenu';
import CustomHeaderButton from '../../components/HeaderButton';
import UserProductItem from '../../components/UserProductItem';

import { AppState } from '../../store';
import { deleteProduct } from '../../store/products/actions';

import { defaultTheme } from '../../utils/themes';

const UserProductsScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { userProducts } = useSelector((state: AppState) => state.products);

  const dispatch = useDispatch();

  const editPressHandler = (productId: string): void => {
    navigation.navigate({
      routeName: 'EditProduct',
      params: { productId }
    });
  };

  const deletePressHandler = (productId: string): void => {
    Alert.alert('Delete Product', 'Are you sure?', [
      {
        text: 'No',
        style: 'cancel'
      },
      {
        text: 'Yes',
        style: 'default',
        onPress: () => {
          dispatch(deleteProduct(productId));
        }
      }
    ]);
  };

  return (
    <View>
      <FlatList
        data={userProducts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <UserProductItem
            product={item}
            onEdit={() => {
              editPressHandler(item.id);
            }}
            onDelete={() => {
              deletePressHandler(item.id);
            }}
          />
        )}
      />
    </View>
  );
};

UserProductsScreen.navigationOptions = navProps => ({
  headerTitle: 'My Products',
  headerLeft: () => (
    <HeaderButtonMenu
      onPress={() => {
        navProps.navigation.toggleDrawer();
      }}
    />
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="md-add-circle-outline"
        buttonStyle={{ color: defaultTheme.colors.light }}
        title="Add a Product"
        onPress={() => {
          navProps.navigation.navigate({
            routeName: 'AddProduct'
          });
        }}
      />
    </HeaderButtons>
  )
});

export default UserProductsScreen;
