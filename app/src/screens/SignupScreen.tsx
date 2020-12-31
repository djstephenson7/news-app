import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import * as yup from 'yup';

import AuthForm from '../components/AuthForm';
import FieldHeader from '../components/FieldHeader';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/authContext';

type FormData = {
  email: string;
  firstName: string;
  surname: string;
  password: string;
  confirmPassword: string;
};

const formSchema = yup.object().shape({
  email: yup.string().email().min(5).max(50).required(),
  firstName: yup.string().min(5).max(50).required(),
  surname: yup.string().min(5).max(50).required(),
  password: yup.string().min(5).max(50).required(),
  confirmPassword: yup.string().min(5).max(50).required(),
});

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: 8,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Tell us about yourself!
        </Text>
        <Text>
          <Text style={{ color: 'red' }}>*</Text> Required fields
        </Text>
      </View>
      <AuthForm
        required
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={state.errorMessage}
      />

      <Input
        label={<FieldHeader text="First name" required />}
        value={firstName}
        onChangeText={setfirstName}
        autoCorrect={false}
      />
      <Input
        label={<FieldHeader text="Surname" required />}
        value={surname}
        onChangeText={setSurname}
        autoCorrect={false}
      />

      <NavLink text="To Login Screen" routeName="Login" />
      <Button
        title="Signup"
        onPress={() => signup({ email, password, firstName, surname })}
      ></Button>
    </ScrollView>
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
