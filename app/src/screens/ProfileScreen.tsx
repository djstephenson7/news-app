import React, {
  FunctionComponent,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { TextInput } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { Context as AuthContext } from '../context/authContext';
import { StyledView } from '../styledElements';

interface ProfileScreenProps {}

const ProfileScreen: FunctionComponent<ProfileScreenProps> = () => {
  const { getUserDetails, updatePassword } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useLayoutEffect(() => {
    const fetchDetails = async () => {
      const details = await getUserDetails();
      setFirstName(details.firstName);
    };

    fetchDetails();
  }, []);

  const handlePress = () => {
    if (newPassword === confirmPassword) {
      updatePassword(newPassword);
    } else {
      console.log('Something went wrong');
    }
  };

  return (
    <StyledView>
      <Text h2>ProfileScreen</Text>
      <Text>Hi {firstName}</Text>
      <Text>Update password settings</Text>
      <TextInput
        style={{
          height: 40,
          margin: 8,
          padding: 8,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="New password"
        onChangeText={setNewPassword}
        value={newPassword}
        autoCapitalize="none"
        autoCorrect={false}
        // secureTextEntry
      />
      <TextInput
        style={{
          height: 40,
          margin: 8,
          padding: 8,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Confirm new password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        autoCapitalize="none"
        autoCorrect={false}
        // secureTextEntry
      />
      <Button style={{ margin: 8 }} onPress={handlePress} title="Confirm" />
    </StyledView>
  );
};

export default ProfileScreen;
