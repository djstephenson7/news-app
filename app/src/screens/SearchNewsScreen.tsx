import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useContext, useEffect, useState } from 'react';
import { Platform, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import NewsList from '../components/NewsList';
import { Context as NewsContext } from '../context/newsContext';
import { StyledView } from '../styledElements';
import { languages, newsDomains } from '../utils';

const SearchNewsScreen = () => {
  console.disableYellowBox = true;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);
  const { clearNews, searchNews, state } = useContext(NewsContext);

  useEffect(() => {
    clearNews();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  };

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
      <View>
        <View>
          <Button onPress={() => setShow(!show)} title="Show date picker" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
          />
        )}
      </View>
    </StyledView>
  );
};

export default SearchNewsScreen;
