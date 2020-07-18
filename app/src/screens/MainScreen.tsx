import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, SectionList } from 'react-native';

import NewsItem from '../components/NewsItem';
import NewsList from '../components/NewsList';
import { Context as NewsContext } from '../context/newsContext';
import { StyledNewsItemSubheader, StyledView } from '../styledElements';

const MainScreen = () => {
  const [loading, setLoading] = useState(true);
  const { fetchNews, state } = useContext(NewsContext);
  console.log(loading);

  // if (loading) {
  //   return <ActivityIndicator />;
  // }

  useEffect(() => {
    console.log('useEffect', loading);
    fetchNews() && setLoading(false);
  }, []);

  return (
    <StyledView>
      {!loading && (
        <NewsList state={state} callback={fetchNews} isRefreshing={loading} />
      )}
      {/* <SectionList
        sections={state.results}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => <NewsItem section={section} />}
        renderItem={({ item }) => (
          <StyledNewsItemSubheader>{item}</StyledNewsItemSubheader>
        )}
        stickySectionHeadersEnabled={false}
        onRefresh={fetchNews}
        refreshing={loading}
        initialNumToRender={18}
      /> */}
    </StyledView>
  );
};

export default MainScreen;
