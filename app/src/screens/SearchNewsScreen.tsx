import React, { useContext, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import NewsList from '../components/NewsList';
import Popup from '../components/Popup';
import { Context as NewsContext } from '../context/newsContext';
import { StyledView } from '../styledElements';
import { languages, newsDomains } from '../utils';

const SearchNewsScreen = () => {
  console.disableYellowBox = true;
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);
  const { clearNews, searchNews, state } = useContext(NewsContext);
  const [fromVisible, setFromVisible] = useState(false);
  const [toVisible, setToVisible] = useState(false);

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
      <Dropdown
        containerStyle={{ margin: 8 }}
        label="Select Language"
        data={languages}
        value={languages.label}
        onChangeText={(value) => {
          setLanguage(value);
        }}
      />
      <NewsList
        results={state.results}
        callback={searchNews}
        isRefreshing={loading}
      />
      <Button
        style={{ margin: 8 }}
        onPress={() => setFromVisible(!fromVisible)}
        title="Date from"
      />
      <Button
        style={{ margin: 8 }}
        onPress={() => setToVisible(!toVisible)}
        title="Date to"
      />
      <Button
        style={{ margin: 8 }}
        title="Search"
        onPress={() => getNews({ language, query, source })}
      />
      <Popup
        header="Select date from"
        date={dateFrom}
        setDate={setDateFrom}
        setModalVisible={setFromVisible}
        modalVisible={fromVisible}
      />
      <Popup
        header="Select date to"
        date={dateTo}
        setDate={setDateTo}
        setModalVisible={setToVisible}
        modalVisible={toVisible}
      />
    </StyledView>
  );
};

export default SearchNewsScreen;
