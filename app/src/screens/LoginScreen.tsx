import { useFocusEffect } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { Field, Formik } from 'formik';
import React, { useCallback, useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import CustomInput from '../components/CustomInput';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/authContext';

const LoginScreen = () => {
  const { state, signin, clearErrors } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      return () => {
        clearErrors();
      };
    }, [])
  );

  useEffect(() => {
    const fetchData = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      console.log(compatible);
    };
    fetchData();
  }, []);

  // const submitDetails = async () => {
  //   // const hasBio = await LocalAuthentication.isEnrolledAsync();
  //   let result = await LocalAuthentication.authenticateAsync()
  //   console.log(result);

  // };

  return (
    <View style={styles.container}>
      <Text>{state.errorMessage && state.errorMessage}</Text>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={signin}>
        {({ handleSubmit }) => (
          <>
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button
              style={styles.loginBtn}
              onPress={handleSubmit}
              title="Sign in"
            />
          </>
        )}
      </Formik>
      <NavLink text="To Signup Screen" routeName="Signup" />
      <NavLink text="Forgot your password?" routeName="ForgotPassword" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 8 },
  loginBtn: { padding: 40 },
});

export default LoginScreen;
