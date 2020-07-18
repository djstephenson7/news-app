import React, { useContext, useEffect, useState } from 'react';
import { SectionList, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import NewsItem from '../components/NewsItem';
import { Context as NewsContext } from '../context/newsContext';
import { StyledNewsItemSubheader, StyledView } from '../styledElements';

const SearchNewsScreen = () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
  const { clearNews, searchNews, state } = useContext(NewsContext);

  useEffect(() => {
    clearNews();
  }, []);

  const getNews = (query) => {
    searchNews(query);
    setLoading(false);
  };

  return (
    <StyledView>
      <TextInput
        style={{ height: 40, margin: 8, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setValue(text)}
        value={value}
      />
      <Button
        style={{ margin: 8 }}
        title="Search"
        onPress={() => getNews(value)}
      />
      {state.results && (
        <SectionList
          sections={state.results}
          keyExtractor={(item) => item.key}
          renderSectionHeader={({ section }) => <NewsItem section={section} />}
          renderItem={({ item }) => (
            <StyledNewsItemSubheader>{item}</StyledNewsItemSubheader>
          )}
          stickySectionHeadersEnabled={false}
          refreshing={loading}
          initialNumToRender={18}
        />
      )}
    </StyledView>
  );
};

export default SearchNewsScreen;
