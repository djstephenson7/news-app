import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';

import { Context as NewsContext } from '../context/newsContext';

const NewsScreen = ({ route, navigation }) => {
  const { state } = useContext(NewsContext);
  const { key } = route.params;
  const article = state.results.find((t) => t.key === key);

  return (
    <View>
      <Text>{article.content}</Text>
      {/* <FlatList
        data={article}
        renderItem={({ item }) => console.log(item)}
        keyExtractor={(item) => key}
      /> */}
    </View>
  );
};

export default NewsScreen;
