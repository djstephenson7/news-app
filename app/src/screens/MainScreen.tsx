import React, { useContext, useEffect, useState } from 'react';
import { SectionList } from 'react-native';

import NewsItem from '../components/NewsItem';
import { Context as NewsContext } from '../context/newsContext';
import { StyledNewsItemSubheader, StyledView } from '../styledElements';

const MainScreen = () => {
  const [loading, setLoading] = useState(true);
  const { fetchNews, state } = useContext(NewsContext);

  useEffect(() => {
    fetchNews() && setLoading(false);
  }, []);

  return (
    <StyledView>
      <SectionList
        sections={state.results}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => <NewsItem section={section} />}
        renderItem={({ item }) => (
          <StyledNewsItemSubheader>{item}</StyledNewsItemSubheader>
        )}
        stickySectionHeadersEnabled={false}
        onRefresh={() => fetchNews()}
        refreshing={loading}
        initialNumToRender={18}
      />
    </StyledView>
  );
};

export default MainScreen;
