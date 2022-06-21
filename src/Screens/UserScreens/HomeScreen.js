import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../../Navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        Select one of the options below to continue.
      </Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Orders')}>
        <ImageBackground
          source={require('../../Assets/Images/food.jpg')}
          style={styles.img}
        />
        <View style={styles.textView}>
          <Text style={styles.imageText}>Food Delivery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Recipes')}>
        <ImageBackground
          source={require('../../Assets/Images/recipe.jpg')}
          style={styles.img}
        />
        <View style={styles.textView}>
          <Text style={styles.imageText}>Recipe Guide</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  Text: {
    // fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 35,
    letterSpacing: 0.5,
    textAlign: 'left',
    color: '#1C1C1E',
    width: '100%',
  },
  item: {
    width: '100%',
    aspectRatio: 2,
    marginVertical: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  minortext: {
    lineHeight: 22,
    textAlign: 'center',
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor:
      'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
  },
  imageText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
});
