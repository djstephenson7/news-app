import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';

import { Context as AuthContext } from '../context/authContext';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchNewsScreen from '../screens/SearchNewsScreen';
import SignupScreen from '../screens/SignupScreen';
import { navigationRef } from './navigationRef';

const Main = createStackNavigator();
const Auth = createStackNavigator();
const Search = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthFlow = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerLeft: null, gestureEnabled: false }}
      />
      <Auth.Screen name="Signup" component={SignupScreen} />
      <Auth.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Auth.Navigator>
  );
};
const SearchStack = () => {
  return (
    <Search.Navigator>
      <Search.Screen
        name="SearchNewsScreen"
        component={SearchNewsScreen}
        options={{ title: 'Search' }}
      />
      <Search.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={({ route }) => ({
          title: route.params.source,
          headerBackTitle: null,
        })}
      />
      <Search.Screen
        name="MainScreen"
        component={MainScreen}
        options={({ route }) => ({
          title: `Results for '${route.params.query}'`,
          gestureEnabled: false,
        })}
      />
    </Search.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="AuthFlow"
        component={AuthFlow}
        options={{
          headerShown: false,
        }}
      />
      <Main.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerLeft: null,
          gestureEnabled: false,
          title: "Today's Top Headlines",
        }}
      />
      <Main.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={({ route }) => ({
          title: route.params.source,
          headerBackTitle: null,
        })}
      />
    </Main.Navigator>
  );
};

const Logout = (props) => {
  const { signout } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={signout} />
    </DrawerContentScrollView>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        drawerType="slide"
        drawerStyle={{ width: '60%' }}
        drawerContent={(props) => <Logout {...props} />}
      >
        <Drawer.Screen
          name="Today's Top Headlines"
          component={MainFlow}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen
          name="SearchNewsScreen"
          component={SearchStack}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
