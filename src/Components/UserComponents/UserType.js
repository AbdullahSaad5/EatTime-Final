import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const UserType = ({color, title, image, ...rest}) => {
  return (
    <TouchableOpacity
      style={[styles.rectangle, {backgroundColor: color}]}
      {...rest}>
      <Text style={styles.Text}>{title}</Text>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default UserType;

const styles = StyleSheet.create({
  rectangle: {
    marginVertical: 10,
    width: 325,
    height: 114,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  Text: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 21,
    letterSpacing: -0.3199999928474426,
    textAlign: 'left',
    color: '#1C1C1C',
  },
});
