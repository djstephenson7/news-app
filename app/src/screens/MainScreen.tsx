import { Button, FlatList, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';

import { Context as AuthContext } from '../context/authContext';
import newsAPI from '../api/newsAPI';

const MainScreen = () => {
  const { signout } = useContext(AuthContext);
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
      <Button title="Button" onPress={signout} />
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default MainScreen;
