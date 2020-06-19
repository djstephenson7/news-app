import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = () => {
  const { state, signin, clearErrors } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      return () => clearErrors();
    }, [])
  );

  return (
    <View>
      <AuthForm
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        headerText="Login screen"
        errorMessage={state.errorMessage}
      />
      <NavLink text="To Signup Screen" routeName="Signup" />
      <NavLink text="Forgot your password?" routeName="ForgotPassword" />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => signin({ username, password })}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
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
