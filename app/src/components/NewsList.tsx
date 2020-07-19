import React, { SFC } from 'react';
import { SectionList } from 'react-native';

import { StyledNewsItemSubheader } from '../styledElements';
import NewsItem from './NewsItem';

interface NewsListProps {
  results: Array<any>;
  callback: () => void;
  isRefreshing: boolean;
}

const NewsList: SFC<NewsListProps> = ({ results, callback, isRefreshing }) => {
  return (
    <SectionList
      sections={results}
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
