import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HamBurger = () => {
  return (
    <View style={styles.icon}>
      <Ionicons name="filter" size={35} />
    </View>
  );
};

export default HamBurger;

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 13,
  },
});
