import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import newsAPI from '../api/newsAPI';

const MainScreen = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await newsAPI.get('/news');

      setResults(res.data);
    }
    fetchData();
  }, []);

  return (
    <View>
      <Text>MainScreen</Text>
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default MainScreen;
