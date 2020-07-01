import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';

import { Context as NewsContext } from '../context/newsContext';
import { formatDate } from '../utils';

const NewsScreen = ({ route }) => {
  const { state } = useContext(NewsContext);
  const { key } = route.params;
  const article = state.results.find((t) => t.key === key);

  return (
    <View>
      <Text>{article.title}</Text>
      <Image
        style={{ height: 50, width: 50 }}
        source={{ uri: article.urlToImage }}
      />
      <Text>{formatDate(article.publishedAt)}</Text>
      <Text>{article.author}</Text>
      <Text>{article.content}</Text>
    </View>
  );
};

export default NewsScreen;
