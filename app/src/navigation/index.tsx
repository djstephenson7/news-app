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
const AuthStack = createStackNavigator();

export const AuthFlow = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AuthFlow"
          component={AuthFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
