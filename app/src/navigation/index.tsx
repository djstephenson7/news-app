import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const StackNavigator = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
});

export default NavigationContainer(StackNavigator);
