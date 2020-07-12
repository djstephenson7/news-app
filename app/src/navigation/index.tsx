import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignupScreen from '../screens/SignupScreen';
import { navigationRef } from './navigationRef';

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const AuthFlow = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="AuthFlow"
        component={AuthFlow}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerLeft: null, gestureEnabled: false }}
      />
      <MainStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={({ route }) => ({
          title: route.params.source,
          headerBackTitle: null,
        })}
      />
    </MainStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator drawerType="slide" drawerStyle={{ width: '60%' }}>
        <Drawer.Screen name="Today's Top Headlines" component={MainFlow} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
