import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar, Title, Caption, Drawer, TextInput} from 'react-native-paper';
import UserRating from '../../Components/UserComponents/UserRating';
import {useIsFocused} from '@react-navigation/native';
import {AuthContext} from '../../Navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

import {Rating, AirbnbRating} from 'react-native-ratings';

const RecipesDetails = ({route}) => {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const {user} = useContext(AuthContext);

  const isFocused = useIsFocused();

  useEffect(() => {
    setData(route.params.data);
  }, [route.params, isFocused]);

  return data === null ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <ImageBackground
          source={{
            uri: data.picture,
          }}
          style={styles.img}
        />
        <View style={styles.imageOverlay}></View>
        <View style={styles.textView}>
          <Text style={[styles.imageText, {fontSize: 17, fontWeight: '600'}]}>
            Recipe
          </Text>
          <Text style={[styles.imageText, {fontSize: 30, fontWeight: 'bold'}]}>
            {data.title}
          </Text>
        </View>
      </View>
      <View style={styles.infoTop}>
        <View style={styles.infoHeader}>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '200', color: 'grey'},
            ]}>
            Cooking
          </Text>
          <Text style={styles.text}>{data.cookTime} mins</Text>
        </View>
        <View style={styles.infoHeader}>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '200', color: 'grey'},
            ]}>
            Difficulty
          </Text>
          <Text style={styles.text}>{data.difficulty}</Text>
        </View>
        <View style={[styles.infoHeader, {borderRightWidth: 0}]}>
          <Text
            style={[
              styles.text,
              {fontSize: 15, fontWeight: '200', color: 'grey'},
            ]}>
            Rating
          </Text>
          <Text style={styles.text}>
            {data.ratings.length > 0
              ? data.ratings.reduce((a, b) => a + b) / data.ratings.length
              : '0.0'}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
        }}>
        <Text style={styles.header}>Ingredients</Text>
        <View style={styles.servings}>
          <Text style={styles.serve}> {count} Servings</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                count > 1 && setCount(count - 1);
              }}>
              <Feather name="minus" size={23} color="grey" style={styles.btn} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCount(count + 1);
              }}>
              <Feather name="plus" size={23} color="grey" style={styles.btn} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ingredients}>
          {data.ingredients.map((item, index) => {
            return (
              <View style={styles.ingredient} key={index}>
                <Text style={styles.ingredientName}>{item.name} </Text>
                <Text style={styles.ingredientQuantity}>
                  {item.amount * count}g
                </Text>
              </View>
            );
          })}
        </View>
        <Text style={[styles.header, {marginTop: 19, marginBottom: 7}]}>
          Procedure
        </Text>
        <Text style={styles.para}>
          {data.directions.map((item, index) => {
            return item + '\n';
          })}
        </Text>

        <Text style={[styles.header, {marginTop: 19, marginBottom: 7}]}>
          Ratings
        </Text>

        <View style={styles.rating}>
          <View
            style={[
              styles.Myrating,
              {
                // If user has already rated, hide the rating component
                display: data.ratings.find(item => item.userId == user.uid)
                  ? 'none'
                  : 'flex',
              },
            ]}>
            <View style={styles.MyratingTop}>
              <Avatar.Image
                source={{
                  uri: user.photoURL,
                }}
                size={50}
              />
              <TextInput
                mode="flat"
                style={styles.ratingText}
                placeholder="Write Review"
                underlineColor="transparent"
                onChangeText={text => setReview(text)}
              />
            </View>
            <View style={styles.rowContainer}>
              <Text style={[styles.text, {fontSize: 20}]}>Tap to Rate:</Text>
              <Rating
                imageSize={30}
                startingValue={0}
                jumpValue={1}
                onFinishRating={rating => {
                  setRating(rating);
                }}
              />
            </View>
            <View style={styles.MyratingBottom}>
              <TouchableOpacity
                style={styles.submit}
                onPress={() => {
                  if (review !== '') {
                    firestore()
                      .collection('recipes')
                      .doc(data.id)
                      .update({
                        ratings: firestore.FieldValue.arrayUnion({
                          userId: user.uid,
                          rating: rating,
                        }),
                        reviews: firestore.FieldValue.arrayUnion(review),
                      })
                      .then(() => {
                        alert('Rating Submitted');
                      });
                  } else {
                    alert('Please write a review');
                  }
                }}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {data.ratings.map((item, index) => {
            return (
              <UserRating
                data={{
                  rating: item,
                  review: data.reviews[index],
                }}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  item: {
    width: '100%',
    height: 439,
    margin: 0,
    padding: 0,
  },
  img: {
    width: '100%',
    aspectRatio: 0.84,
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    aspectRatio: 0.84,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  topTextView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 300,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
    width: '70%',
    marginRight: 39,
  },

  imageText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '800',
    color: '#fafafa',
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  infoHeader: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 0,
    paddingHorizontal: 35,
    paddingBottom: 7,
    borderRightWidth: 1,
    borderRightColor: 'lightgrey',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'center',
    color: '#1C1C1E',
  },
  header: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
    marginTop: 9,
    marginLeft: 19,
  },
  servings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
  },
  serve: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
  },
  btn: {
    paddingHorizontal: 7,
    backgroundColor: '#7676801F',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  ingredients: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
  },
  ingredientName: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#1C1C1E',
  },
  ingredientQuantity: {
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.37400001287460327,
    textAlign: 'left',
    color: '#3C3C4399',
  },
  para: {
    fontFamily: 'Inter',
    fontSize: 15,
    color: '#1C1C1E',
    lineHeight: 20,
    marginTop: 9,
    marginLeft: 19,
  },
  MyratingTop: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: 7,
    alignItems: 'center',
  },

  ratingText: {
    width: '100%',
    backgroundColor: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  submit: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 10,
  },
});
