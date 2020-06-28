import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import NewsScreen from '../screens/NewsScreen';
import SignupScreen from '../screens/SignupScreen';
import { navigationRef } from './navigationRef';

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

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

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
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
        <MainStack.Screen name="MainScreen" component={MainScreen} />
        <MainStack.Screen name="NewsScreen" component={NewsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
