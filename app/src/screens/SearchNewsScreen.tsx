import React, { useContext, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import NewsList from '../components/NewsList';
import { Context as NewsContext } from '../context/newsContext';
import { StyledView } from '../styledElements';
import { newsDomains } from '../utils';

const SearchNewsScreen = () => {
  console.disableYellowBox = true;
  const [query, setQuery] = useState('');
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);
  const { clearNews, searchNews, state } = useContext(NewsContext);

  useEffect(() => {
    clearNews();
  }, []);

  const getNews = (query) => {
    searchNews(query);
    setLoading(false);
  };

  console.log(state.results);

  return (
    <StyledView>
      <TextInput
        style={{ height: 40, margin: 8, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Search by keywords..."
        onChangeText={setQuery}
        value={query}
      />
      <Dropdown
        containerStyle={{ margin: 8 }}
        label="Select News Source"
        data={newsDomains}
        value={newsDomains.label}
        onChangeText={(value) => {
          setSource(value);
        }}
      />
      <Button
        style={{ margin: 8 }}
        title="Search"
        onPress={() => getNews({ query, source })}
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
