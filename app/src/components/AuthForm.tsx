import { Input, Text } from 'react-native-elements';

import React from 'react';

export interface AuthFormProps {
  headerText: string;
  errorMessage: string;
}

const AuthForm = (props) => {
  const {
    headerText,
    errorMessage,
    username,
    password,
    setUsername,
    setPassword,
  } = props;

  return (
    <>
      <Text>{headerText}</Text>
      <Text>{errorMessage && errorMessage}</Text>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
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
