import { useFocusEffect } from '@react-navigation/native';
import { Field, Formik } from 'formik';
import React, { useCallback, useContext } from 'react';
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

  return (
    <View>
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
            <Button onPress={handleSubmit} title="Submit" />
          </>
        )}
      </Formik>
      <NavLink text="To Signup Screen" routeName="Signup" />
      <NavLink text="Forgot your password?" routeName="ForgotPassword" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: '30%',
    fontSize: 30,
  },
  inputText: {
    width: '80%',
    backgroundColor: '#D3D3D3',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  forgot: {
    padding: '2.5%',

    fontSize: 16,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#556B2F',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'black',
  },
});

export default LoginScreen;
