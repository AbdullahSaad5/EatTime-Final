import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TabButton({title, currentPage, handleTabPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        handleTabPress(title);
      }}>
      <Text
        style={[
          styles.buttonText,
          currentPage === title && styles.activeButton,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeButton: {
    color: '#1c1c1c',
    borderBottomColor: '#007EFF',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#757575',
  },
});
