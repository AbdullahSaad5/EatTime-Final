import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import hamburger from '../../Assets/Icons/hamburger.png';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function TextNavbar({text}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          navigation.navigate('Admin HomeScreen');
        }}>
        <EntypoIcon name="chevron-left" size={25} color="black" />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.hamburger}>
        <Image source={hamburger} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75,75,75,0.25)',
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  hamburger: {
    marginRight: 10,
  },
});
