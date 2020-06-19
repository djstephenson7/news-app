import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignupScreen from '../screens/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './navigationRef';

const Stack = createStackNavigator();
const Screen = Stack.Screen;

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Loading">
        <Screen name="Loading" component={LoadingScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Signup" component={SignupScreen} />
        <Screen name="MainScreen" component={MainScreen} />
        <Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
