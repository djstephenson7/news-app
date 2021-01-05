import { Field, Formik } from 'formik';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import CustomInput from '../components/CustomInput';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/authContext';
import formSchema from '../schema/FormSchema';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

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
      <Text>{state.errorMessage && state.errorMessage}</Text>
      <Formik
        validationSchema={formSchema}
        initialValues={{ email: '', password: '', firstName: '', surname: '' }}
        onSubmit={signup}
      >
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
            <Field
              component={CustomInput}
              name="firstName"
              placeholder="First Name"
            />
            <Field
              component={CustomInput}
              name="surname"
              placeholder="Surname"
            />

            <Button onPress={handleSubmit} title="Submit" />
          </>
        )}
      </Formik>
      <NavLink text="To Login Screen" routeName="Login" />
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
