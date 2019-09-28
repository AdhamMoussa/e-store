import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButtonMenu from '../../components/HeaderButtonMenu';
import CustomHeaderButton from '../../components/HeaderButton';
import UserProductItem from '../../components/UserProductItem';

import { AppState } from '../../store';

import { defaultTheme } from '../../utils/themes';

const UserProductsScreen: NavigationStackScreenComponent = ({ navigation }) => {
  const { userProducts } = useSelector((state: AppState) => state.products);

  const editPressHandler = (productId: string): void => {
    navigation.navigate({
      routeName: 'EditProduct',
      params: { productId }
    });
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
            onDelete={() => {}}
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
