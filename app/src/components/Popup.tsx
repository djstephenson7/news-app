import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

interface PopupProps {
  header: string;
  modalVisible: any;
  setModalVisible: any;
  date: any;
  setDate: any;
}

const Popup = (props: PopupProps) => {
  const { header, modalVisible, setModalVisible, date, setDate } = props;
  const onChange = (event, selectedDate) => setDate(selectedDate);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text h4>{header}</Text>
          <DateTimePicker
            style={styles.picker}
            value={date}
            onChange={onChange}
          />
          <Button
            style={{ margin: 8 }}
            onPress={() => setModalVisible(!modalVisible)}
            title="Done"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  picker: {
    height: 300,
    width: 300,
    margin: 8,
  },
});

export default Popup;
