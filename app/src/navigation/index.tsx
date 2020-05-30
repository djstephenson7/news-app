import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import SignupScreen from '../screens/SignupScreen';
import { navigationRef } from './navigationRef';

const Stack = createStackNavigator();
const Screen = Stack.Screen;

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Signup" component={SignupScreen} />
        <Screen name="MainScreen" component={MainScreen} />
        <Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
