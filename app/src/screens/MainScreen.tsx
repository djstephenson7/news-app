import React, { useContext, useEffect } from 'react';
import { Button, SectionList } from 'react-native';

import NewsItem from '../components/NewsItem';
import { Context as AuthContext } from '../context/authContext';
import { Context as NewsContext } from '../context/newsContext';
import { StyledNewsItemSubheader, StyledView } from '../styledElements';

const MainScreen = () => {
  const { signout } = useContext(AuthContext);
  const { fetchNews, state } = useContext(NewsContext);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <StyledView>
      <Button title="Logout" onPress={signout} />
      <SectionList
        sections={state.results}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section }) => <NewsItem section={section} />}
        renderItem={({ item }) => (
          <StyledNewsItemSubheader>{item}</StyledNewsItemSubheader>
        )}
        stickySectionHeadersEnabled={false}
      />
    </StyledView>
  );
};

export default MainScreen;
