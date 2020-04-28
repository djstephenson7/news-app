import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type FormData = {
  username: string;
  email: string;
  firstName: string;
  surname: string;
  password: string;
  confirmPassword: string;
};

const SignupScreen = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();

  const onSubmit = async (data) => {
    try {
      const result = await axios.post('http://localhost:8000/api/users', data);

      console.log('Form Data', result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    register('username');
    register('email');
    register('firstName');
    register('surname');
    register('password');
    register('confirmPassword');
  }, [register]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup screen</Text>
      <TextInput
        onChangeText={(text) => setValue('username', text)}
        style={styles.inputText}
        placeholder="Username"
        autoCapitalize="none"
      />
      <TextInput
        onChangeText={(text) => setValue('email', text)}
        style={styles.inputText}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        onChangeText={(text) => setValue('firstName', text)}
        style={styles.inputText}
        placeholder="First Name"
      />
      <TextInput
        onChangeText={(text) => setValue('surname', text)}
        style={styles.inputText}
        placeholder="Surname"
      />
      <TextInput
        onChangeText={(text) => setValue('password', text)}
        style={styles.inputText}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        // onChangeText={(text) => setValue('confirmPassword', text)}
        style={styles.inputText}
        placeholder="Confirm Password"
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>To Login Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.loginBtn}
      >
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
  },
  header: {
    marginTop: '10%',
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
