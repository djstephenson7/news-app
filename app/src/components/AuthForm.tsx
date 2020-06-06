import React, { useState } from 'react';
import { Button, Input, Text } from 'react-native-elements';

export interface AuthFormProps {
  headerText: string;
  errorMessage: string;
}

const AuthForm: React.SFC<AuthFormProps> = ({
  headerText,
  errorMessage,
  username,
  password,
  setUsername,
  setPassword,
}) => {
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
