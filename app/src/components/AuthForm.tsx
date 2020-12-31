import React from 'react';
import { Input, Text } from 'react-native-elements';

export interface AuthFormProps {
  headerText: string;
  errorMessage: string;
}

const AuthForm = (props) => {
  const {
    headerText,
    errorMessage,
    email,
    setEmail,
    password,
    setPassword,
  } = props;

  return (
    <>
      <Text>{headerText}</Text>
      <Text>{errorMessage && errorMessage}</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
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
    </>
  );
};

export default AuthForm;
