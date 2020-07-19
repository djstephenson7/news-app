import React, { useContext, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import NewsList from '../components/NewsList';
import { Context as NewsContext } from '../context/newsContext';
import { StyledView } from '../styledElements';

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
        onChangeText={setValue}
        value={value}
      />
      <Button
        style={{ margin: 8 }}
        title="Search"
        onPress={() => getNews(value)}
      />
      <NewsList
        results={state.results}
        callback={searchNews}
        isRefreshing={loading}
      />
    </StyledView>
  );
};

export default SearchNewsScreen;
