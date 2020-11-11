import React, {
  FunctionComponent,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';
import { TextInput } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as AuthContext } from '../context/authContext';
import { StyledView } from '../styledElements';

interface ProfileScreenProps {}

const ProfileScreen: FunctionComponent<ProfileScreenProps> = () => {
  const { getUserDetails } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');

  useLayoutEffect(() => {
    const fetchDetails = async () => {
      const details = await getUserDetails();
      setFirstName(details.firstName);
    };

    fetchDetails();
  }, []);

  return (
    <StyledView>
      <Text h2>ProfileScreen</Text>
      <Text>Hi {firstName}</Text>
      <TextInput
        style={{
          height: 40,
          margin: 8,
          padding: 8,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="Update email"
        // onChangeText={setQuery}
        // value={query}
      />
    </StyledView>
  );
};

export default ProfileScreen;
