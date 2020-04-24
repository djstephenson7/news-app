import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export interface SignupScreenProps {}

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup screen</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput style={styles.inputText} placeholder="First Name" />
      <TextInput style={styles.inputText} placeholder="Surname" />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Confirm Password"
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity>
        <Text style={styles.loginText}>To Login Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SIGNUP</Text>
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
    marginBottom: '5%',
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
  loginBtn: {
    width: '80%',
    backgroundColor: '#556B2F',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: 'black',
  },
});

export default SignupScreen;
