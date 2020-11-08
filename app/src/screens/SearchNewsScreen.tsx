import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import DatePicker from '../components/DatePicker';
import Popup from '../components/Popup';
import { navigate } from '../navigation/navigationRef';
import { StyledView } from '../styledElements';
import { languages, newsDomains } from '../utils';

const SearchNewsScreen = () => {
  console.disableYellowBox = true;
  const [dateBoundary, setDateBoundary] = useState('dateFrom');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [language, setLanguage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [source, setSource] = useState('');

  const onChange = (event, selectedDate) => {
    dateBoundary === 'dateFrom'
      ? setDateFrom(selectedDate)
      : setDateTo(selectedDate);
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
        onChangeText={(value) => setSource(value)}
      />
      <Dropdown
        containerStyle={{ margin: 8 }}
        label="Select Language"
        data={languages}
        value={languages.label}
        onChangeText={(value) => setLanguage(value)}
      />
      <Button
        style={{ margin: 8 }}
        onPress={() => {
          setDateFrom(new Date());
          setDateBoundary('dateFrom');
          setModalVisible(!modalVisible);
        }}
        title="Date from"
      />
      <Button
        style={{ margin: 8 }}
        onPress={() => {
          setDateTo(new Date());
          setDateBoundary('dateTo');
          setModalVisible(!modalVisible);
        }}
        title="Date to"
      />
      <Button
        style={{ margin: 8 }}
        title="Search"
        onPress={() =>
          navigate('MainScreen', { language, query, source, dateFrom, dateTo })
        }
      />
      <Popup
        content={
          <DatePicker
            date={dateBoundary === 'dateFrom' ? dateFrom : dateTo}
            onChange={onChange}
          />
        }
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </StyledView>
  );
};

export default SearchNewsScreen;
