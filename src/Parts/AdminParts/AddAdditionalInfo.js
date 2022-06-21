import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import ControlsBar from '../../Components/AdminComponents/ControlsBar';
import SmallToggle from '../../Components/AdminComponents/SmallToggle';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

// Backend
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

export default function AddAdditionalInfo({navigation, route}) {
  const [toggle, setToggle] = useState(0);
  const [price, setPrice] = useState('Rs. ' + 0);

  const handleNext = () => {
    const id = uuidv4();
    let data = {
      id: id,
      title: route.params.title,
      picture: '',
      prepTime: route.params.prepTime,
      cookTime: route.params.cookTime,
      difficulty: route.params.difficulty,
      ingredients: route.params.ingredients,
      directions: route.params.directions,
      price: price.replace('Rs. ', ''),
      availableToBuy: toggle,
      date: new Date().toLocaleString(),
      reviews: [],
      ratings: [],
    };
    console.log(data);
    console.log(route.params.picture);

    // Getting file name from picture location
    const fileName = route.params.picture.split('/').pop();
    const reference = storage().ref(fileName);

    reference
      .putFile(route.params.picture)
      .then(() => {
        reference
          .getDownloadURL()
          .then(url => {
            console.log(url);
            // set url to the data
            data.picture = url;
            console.log(data);
          })
          .then(() => {
            firestore()
              .collection('recipes')
              .doc(id)
              .set(data)
              .then(() => {
                console.log('Document successfully written!');
                navigation.navigate('Admin HomeScreen');
              });
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Additional info</Text>

      <View style={[styles.section, {marginTop: 30}]}>
        <Text style={styles.text}>Available to Buy?</Text>
        <SmallToggle
          option1="No"
          option2="Yes"
          toggle={toggle}
          setToggle={setToggle}
        />
      </View>

      <View style={[styles.section, {marginTop: 20}]}>
        <Text style={styles.text}>Available to Buy?</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          mode="outlined"
          outlineColor="#BCBCBC"
          activeOutlineColor="#007EFF"
          style={styles.textInput}
        />
      </View>

      <ControlsBar
        backButtonDisabled={false}
        nextButtonText="Submit"
        navigation={navigation}
        onNext={handleNext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  heading: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  scrollContainer: {
    marginBottom: 150,
  },
  addButton: {
    marginTop: 25,
    width: '100%',
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  textInput: {
    width: '50%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
