import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function RecipeContainer({item}) {
  const navigation = useNavigation();
  const [cartIcon, setCartIcon] = useState(
    item.availableToBuy ? 'cart-check' : 'cart-remove',
  );
  return (
    <View style={styles.recipe}>
      <View style={styles.recipeImage}>
        <Image
          style={styles.image}
          source={{
            uri: item.picture,
          }}
        />
      </View>
      <View style={styles.recipeDetails}>
        <View style={styles.details}>
          <Text style={styles.recipeName}>{item.title}</Text>
          <Text style={styles.recipeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            porta sem, nec viverra dolor.
          </Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              // navigation.navigate('Add Recipe', {item});
              navigation.navigate('Add Recipe', {
                screen: 'Add Recipe Title',
                params: {item: item, mode: 'edit'},
              });
            }}>
            <MaterialIcon name="border-color" size={20} color={'#5076ED'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              firestore().collection('recipes').doc(item.id).delete();
            }}>
            <FeatherIcon name="trash" size={20} color={'#FB4E4E'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              if (cartIcon === 'cart-remove') {
                setCartIcon('cart-check');
                firestore().collection('recipes').doc(item.id).update({
                  availableToBuy: true,
                });
              } else {
                setCartIcon('cart-remove');
                firestore().collection('recipes').doc(item.id).update({
                  availableToBuy: false,
                });
              }
            }}>
            <MaterialCommunityIcon
              name={cartIcon}
              size={20}
              color={cartIcon == 'cart-check' ? '#2AC769' : '#FB4E4E'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipe: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,

    elevation: 5,
  },
  recipeImage: {
    width: '35%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
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
