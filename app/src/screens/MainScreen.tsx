import React, { useContext, useEffect } from 'react';
import {
  Button,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from 'react-native-elements';

import { Context as AuthContext } from '../context/authContext';
import { Context as NewsContext } from '../context/newsContext';
import { navigate } from '../navigation/navigationRef';

const MainScreen = () => {
  const { signout } = useContext(AuthContext);
  const { fetchNews, state } = useContext(NewsContext);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <View>
      <Text>MainScreen</Text>
      <Button title="Logout" onPress={signout} />
      <SectionList
        sections={state.results}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => (
          <TouchableOpacity
            onPress={() =>
              navigate('NewsScreen', {
                source: section.source.name,
                key: section.key,
              })
            }
          >
            <Text style={{ color: 'red' }}>{section.title}</Text>
          </TouchableOpacity>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

export default MainScreen;
