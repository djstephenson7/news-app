import { Button, SectionList, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { Context as AuthContext } from '../context/authContext';
import { Context as NewsContext } from '../context/newsContext';

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
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ color: 'red' }}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default MainScreen;
