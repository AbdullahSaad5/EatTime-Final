import {View, Text, Button, StyleSheet, Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Select')}
      onDone={() => navigation.navigate('Select')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              style={styles.img}
              source={require('../../Assets/SVG/eating.webp')}
            />
          ),
          title: 'Delieveries',
          subtitle: 'Want to Eat Some Mouth Watering Food?',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              style={styles.img}
              source={require('../../Assets/SVG/cooking.png')}
            />
          ),
          title: 'Recipes',
          subtitle: 'Want to Cook Some Delicious Food?',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              style={styles.img}
              source={require('../../Assets/SVG/welcome.png')}
            />
          ),
          title: 'Welcome',
          subtitle: "Let's Start Your Journey",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});
