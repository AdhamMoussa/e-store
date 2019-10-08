import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  StatusBar
} from 'react-native';
import {
  DrawerNavigatorItems,
  DrawerContentComponentProps
} from 'react-navigation-drawer';
import { useSelector, useDispatch } from 'react-redux';
import { SwitchActions } from 'react-navigation';

import { AppState, ThunkDispatchType } from '../../store';
import { logout } from '../../store/user/operations';

import { defaultTheme } from '../../utils/themes';

const SideDrawer: React.FC<DrawerContentComponentProps> = props => {
  const dispatch = useDispatch<ThunkDispatchType>();

  const user = useSelector((state: AppState) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
    props.navigation.dispatch(SwitchActions.jumpTo({ routeName: 'Auth' }));
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <ScrollView>
        {user && (
          <>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 10,
                color: defaultTheme.colors.light
              }}
            >
              {user.email}
            </Text>

            <View style={{ marginBottom: 50 }}>
              <TouchableNativeFeedback onPress={logoutHandler}>
                <View
                  style={{
                    paddingVertical: 10,
                    backgroundColor: defaultTheme.colors.main
                  }}
                >
                  <Text
                    style={{
                      color: defaultTheme.colors.secondary,
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    Logout
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </>
        )}

        <DrawerNavigatorItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideDrawer;
