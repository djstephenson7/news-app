import React, { useContext } from 'react';
import { Text } from 'react-native-elements';

import { Context as NewsContext } from '../context/newsContext';
import {
  StyledImage,
  StyledSource,
  StyledTitle,
  StyledView,
} from '../styledElements';
import { formatDate } from '../utils';

const NewsScreen = ({ route }) => {
  const { state } = useContext(NewsContext);
  const article = state.results.find((t) => t.key === route.params.key);

  return (
    <StyledView>
      <StyledTitle h4>{article.title}</StyledTitle>
      <StyledImage source={{ uri: article.urlToImage }} />
      <Text>{formatDate(article.publishedAt)}</Text>
      <StyledSource>
        {article.source.name} | By {article.author}
      </StyledSource>
      <Text style={{ textAlign: 'justify' }}>{article.content}</Text>
    </StyledView>
  );
};

export default NewsScreen;
