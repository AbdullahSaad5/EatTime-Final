import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import RecipeContainer from '../../Components/AdminComponents/RecipeContainer';
import {useIsFocused} from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

export default function RecipeManagementPage({navigation}) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [cartIcon, setCartIcon] = useState('cart-remove');

  const isFocused = useIsFocused();

  useEffect(() => {
    firestore()
      .collection('recipes')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });
        setData(data);
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.input}
          placeholder="Search your favorite food"
          placeholderTextColor={'#757575'}
          onChangeText={setSearch}
          value={search}
        />
        <IoniIcon
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color={'#757575'}
        />
      </View>

      <View style="buttonContainer">
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Add Recipe');
          }}>
          <IoniIcon name="add-circle-outline" size={20} color={'#FAFAFA'} />
          <Text style={styles.buttonText}>Add New Recipe</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.recipeContainer}>
        {data.map(item => {
          return <RecipeContainer key={item.id} item={item} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  searchbar: {
    position: 'relative',
  },
  input: {
    height: 40,
    backgroundColor: '#F6F6F6',
    margin: 10,
    padding: 10,
    paddingLeft: 40,
    borderRadius: 20,
    color: '#1c1c1c',
  },
  searchIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  button: {
    backgroundColor: '#2AC769',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  recipe: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  recipeImage: {
    width: '35%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  recipeDetails: {
    width: '65%',
    height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '500',
    lineHeight: 18,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  control: {
    padding: 10,
  },
});
