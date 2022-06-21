import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export default function PopUp({visible, setVisible, text}) {
  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <Modal isVisible={visible} onBackdropPress={toggleModal}>
      <View style={styles.container}>
        <View style={styles.popup}>
          <Text style={styles.heading}>Error</Text>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity style={{padding: 5}} onPress={toggleModal}>
            <Text style={styles.button}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 25,
    color: '#rgba(255,0,0,0.7)',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    fontSize: 18,
    color: '#47b4ea',
    fontWeight: 'bold',
  },
});
