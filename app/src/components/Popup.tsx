import React, { ReactNode } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

interface PopupProps {
  content: ReactNode;
  modalVisible: any;
  setModalVisible: any;
}

const Popup = (props: PopupProps) => {
  const { content, modalVisible, setModalVisible } = props;

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {content}
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
});

export default Popup;
