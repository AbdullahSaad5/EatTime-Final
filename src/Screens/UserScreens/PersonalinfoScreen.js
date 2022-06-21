import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput, Avatar} from 'react-native-paper';
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

const PersonalinfoScreen = () => {
  const {user} = useContext(AuthContext);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [number, setNumber] = React.useState('');

  const isFocused = useIsFocused();

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(user.uid + '_c')
      .get()
      .then(doc => {
        setFirstName(doc.data().name.split(' ')[0]);
        setLastName(
          doc.data().name.split(' ')[1] + ' ' + doc.data().name?.split(' ')[2],
        );
        setNumber(doc.data().phoneNumber);
      });
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Avatar.Image
        source={{
          uri: user.photoURL,
        }}
        size={99}
        style={styles.img}
      />
      <View style={styles.input}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          mode="outlined"
          label="First Name"
          placeholder="First Name"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          mode="outlined"
          label="Last Name"
          placeholder="Last Name"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          value={number}
          onChangeText={setNumber}
          mode="outlined"
          label="Contact Number"
          keyboardType="numeric"
          placeholder="Contact Number"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          firestore()
            .collection('users')
            .doc(user.uid + '_c')
            .update({
              name: firstName + ' ' + lastName,
              phoneNumber: number,
            });
        }}>
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalinfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#007eef',
    padding: 10,
    borderRadius: 50,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
