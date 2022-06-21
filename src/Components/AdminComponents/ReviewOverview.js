import React from 'react';
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
export default function ReviewOverview({rating, heading, background}) {
  return (
    <View style={{...styles.review, backgroundColor: background}}>
      <View style={styles.reviewNumbers}>
        <Text style={styles.overallRating}>{rating}%</Text>
        <Text style={styles.ratingType}>{heading}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={styles.progressBarFilled} />
        <View style={{...styles.circle, left: rating - 7}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  review: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  overallRating: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  ratingType: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  progressBar: {
    position: 'relative',
  },
  progressBarFilled: {
    width: 100,
    height: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: 'white',
    position: 'absolute',
    top: -5,
    // ! Have to add shadow to make it look good
  },
});
