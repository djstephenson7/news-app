import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export interface LoginScreenProps {}

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login screen</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="#003f5c"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText} onPress={console.log(props)}>
          Signup
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
