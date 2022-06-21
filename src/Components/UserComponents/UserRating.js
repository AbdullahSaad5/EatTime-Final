import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

export default function UserRating({data}) {
  const [username, setUsername] = useState('');

  const isFocused = useIsFocused();
  useEffect(() => {
    // find the username of the user
    firestore()
      .collection('users')
      .doc(data.rating.userId + '_c')
      .get()
      .then(doc => {
        setUsername(doc.data().name);
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.info}>
          <Image
            source={require('../../Assets/Images/Avatar.jpg')}
            style={styles.image}
          />
          <View style={styles.section}>
            <Text style={styles.name}>{username}</Text>
            <View style={styles.rating}>
              {Array.apply(null, {length: data.rating.rating}).map((e, i) => (
                <FontAwesomeIcon
                  key={i}
                  name="star"
                  size={15}
                  color="#F2994A"
                />
              ))}
              {Array.apply(null, {length: 5 - data.rating.rating}).map(
                (e, i) => (
                  <FontAwesomeIcon
                    key={i}
                    name="star"
                    size={15}
                    color="rgba(128,120,120,0.36)"
                  />
                ),
              )}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.review}> {data.review}</Text>
        </View>
      </View>
      <View style={styles.review}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomColor: 'rgba(60,60,67,0.29)',
    borderBottomWidth: 1,
  },
  info: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  rating: {
    flexDirection: 'row',
  },
  section: {
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  review: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'justify',
  },
});
