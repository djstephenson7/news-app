import React from 'react';
import { Input, Text } from 'react-native-elements';

import FieldHeader from './FieldHeader';

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
    required,
  } = props;

  return (
    <>
      <Text>{headerText}</Text>
      <Text>{errorMessage && errorMessage}</Text>
      <Input
        label={<FieldHeader text="Email" required={required} />}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label={<FieldHeader text="Password" required={required} />}
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
