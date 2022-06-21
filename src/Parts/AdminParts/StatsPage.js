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
import StatsOverview from '../../Components/AdminComponents/StatsOverview';
import ReviewOverview from '../../Components/AdminComponents/ReviewOverview';

export default function StatsPage() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <StatsOverview
        heading="Total Orders"
        totalNumbers={225}
        increase={100}
        decrease={20}
        percentage={67}
        background="#5076ED"
      />
      {/* Stat 2 */}
      <StatsOverview
        heading="Total Users"
        totalNumbers={90}
        increase={10}
        decrease={20}
        percentage={-50}
        background="#F9C529"
      />

      {/* Reviews Container */}
      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsHeading}>Reviews</Text>
        <ReviewOverview rating={90} heading="Recipes" background="#39BF5D" />
        <ReviewOverview rating={60} heading="Orders" background="#42B9DE" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  reviewsContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC80',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 25,
    paddingVertical: 17,
    borderRadius: 10,
  },
  reviewsHeading: {
    fontSize: 20,
    color: '#1c1c1c',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
