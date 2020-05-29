import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import * as yup from 'yup';

import { Context as AuthContext } from '../context/authContext';

type FormData = {
  username: string;
  email: string;
  firstName: string;
  surname: string;
  password: string;
  confirmPassword: string;
};

const formSchema = yup.object().shape({
  username: yup.string().min(5).max(50).required(),
  email: yup.string().email().min(5).max(50).required(),
  firstName: yup.string().min(5).max(50).required(),
  surname: yup.string().min(5).max(50).required(),
  password: yup.string().min(5).max(50).required(),
  confirmPassword: yup.string().min(5).max(50).required(),
});

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.header}>Signup screen</Text>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="First Name"
        value={firstName}
        onChangeText={setfirstName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Surname"
        value={surname}
        onChangeText={setSurname}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Button title="To Login Screen" onPress={navigation.goBack}></Button>
      <Button
        title="Signup"
        onPress={() =>
          signup({ username, email, firstName, surname, password })
        }
      ></Button>
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
