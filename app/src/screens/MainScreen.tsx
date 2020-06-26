import { Button, SectionList, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { Context as AuthContext } from '../context/authContext';
import newsAPI from '../api/newsAPI';

const MainScreen = () => {
  const { signout } = useContext(AuthContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await newsAPI.get('/news');

      res.data.forEach((el, index) => {
        results.push({
          key: index + 1,
          title: el.title,
          data: [el.description],
        });
      });
      setResults(results);
    };
    results.length = 0;
    fetchData();
  }, []);

  return (
    <View>
      <Text>MainScreen</Text>
      <Button title="Logout" onPress={signout} />
      <SectionList
        sections={results}
        keyExtractor={(item) => item.key}
        initialNumToRender={6}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={{ color: 'red' }}>{section.title}</Text>
        )}
      />
    </View>
  );
};

export default MainScreen;
