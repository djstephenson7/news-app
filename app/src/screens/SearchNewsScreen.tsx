import DateTimePicker from '@react-native-community/datetimepicker';
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
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);
  const { clearNews, searchNews, state } = useContext(NewsContext);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    clearNews();
  }, []);

  const onChange = (event, selectedDate) => {
    setDateFrom(selectedDate);
  };

  const getNews = (query) => {
    searchNews(query);
    setLoading(false);
  };

  const datePicker = (
    <DateTimePicker
      style={{
        height: 300,
        width: 300,
        margin: 8,
      }}
      testID="dateTimePicker"
      value={dateFrom}
      onChange={onChange}
    />
  );

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
      <Button
        style={{ margin: 8 }}
        title="Search"
        onPress={() => getNews({ language, query, source })}
      />
      <NewsList
        results={state.results}
        callback={searchNews}
        isRefreshing={loading}
      />
      <Button
        style={{ margin: 8 }}
        onPress={() => setModalVisible(!modalVisible)}
        title="Time from"
      />
      <Popup
        content={datePicker}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </StyledView>
  );
};

export default SearchNewsScreen;
