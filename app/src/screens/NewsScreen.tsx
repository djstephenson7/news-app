import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { Text } from 'react-native-elements';
import styled from 'styled-components';

import { Context as NewsContext } from '../context/newsContext';
import { formatDate } from '../utils';

const NewsScreen = ({ route }) => {
  const { state } = useContext(NewsContext);
  const { key } = route.params;
  const article = state.results.find((t) => t.key === key);

  const StyledImage = styled(Image)`
    align-self: center;
    height: 45%;
    width: 100%;
  `;

  const StyledSource = styled(Text)`
    font-weight: bold;
    padding-top: 8px;
    padding-bottom: 8px;
  `;

  const StyledView = styled(View)`
    padding: 8px;
  `;

  const StyledTitle = styled(Text)`
    padding-bottom: 8px;
  `;

  return (
    <StyledView>
      <StyledTitle h4>{article.title}</StyledTitle>
      <StyledImage source={{ uri: article.urlToImage }} />
      <Text>{formatDate(article.publishedAt)}</Text>
      <StyledSource>
        {article.source.name} | By {article.author}
      </StyledSource>
      <Text>{article.content}</Text>
    </StyledView>
  );
};

export default NewsScreen;
