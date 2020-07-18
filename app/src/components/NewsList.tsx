import React, { SFC } from 'react';
import { SectionList } from 'react-native';

import { StyledNewsItemSubheader } from '../styledElements';
import NewsItem from './NewsItem';

export interface NewsListProps {
  state: object;
  callback: () => void;
  isRefreshing: boolean;
}

const NewsList: SFC<NewsListProps> = (state, callback, isRefreshing) => {
  console.log('state: ', state);
  console.log('callback: ', callback);

  console.log('isRefreshing', isRefreshing);

  return (
    <SectionList
      sections={state.results}
      keyExtractor={(item) => item.key}
      renderSectionHeader={({ section }) => <NewsItem section={section} />}
      renderItem={({ item }) => (
        <StyledNewsItemSubheader>{item}</StyledNewsItemSubheader>
      )}
      stickySectionHeadersEnabled={false}
      onRefresh={callback}
      refreshing={isRefreshing}
      initialNumToRender={18}
    />
  );
};

export default NewsList;
