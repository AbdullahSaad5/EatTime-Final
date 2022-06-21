import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Toggle({option1, option2, toggle, setToggle}) {
  return (
    <View style={styles.toggle}>
      <View
        style={[
          styles.toggleButton,
          toggle === 0 ? {left: 0} : {right: 0.5},
        ]}></View>
      <Text
        style={[styles.tab, toggle === 0 && styles.activeTab]}
        onPress={() => {
          setToggle(0);
        }}>
        {option1}
      </Text>
      <Text
        style={[styles.tab, toggle === 1 && styles.activeTab]}
        onPress={() => {
          setToggle(1);
        }}>
        {option2}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  toggle: {
    width: '70%',
    height: 40,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    alignSelf: 'center',
  },
  toggleButton: {
    width: '49.5%',
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 20,
  },
  tab: {
    fontSize: 16,
    fontWeight: '600',
    width: '49.5%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#BDBDBD',
  },
  activeTab: {
    color: '#5076ED',
    borderRadius: 20,
    marginHorizontal: 0.5,
  },
});
