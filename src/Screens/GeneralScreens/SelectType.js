import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {windowHeight} from '../../Utils/Dimensions';
import UserType from '../../Components/UserComponents/UserType';

const SelectType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.minor}>
        <Image
          source={require('../../Assets/Icons/EatTime.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>EatTime!</Text>
        <Text
          style={[
            styles.text,
            {fontSize: 18, fontWeight: '600', marginBottom: 25},
          ]}>
          Select User Type
        </Text>

        <View style={styles.buttonContainer}>
          <UserType
            title="Customer"
            image={require('../../Assets/SVG/customer-svg.png')}
            color="#EAF0FE"
            onPress={() =>
              navigation.navigate('Login', {
                userType: 'customer',
              })
            }
          />
          <UserType
            title="Admin"
            image={require('../../Assets/SVG/admin-svg.png')}
            color="#E4F6FD"
            onPress={() =>
              navigation.navigate('Login', {
                userType: 'admin',
              })
            }
          />
          <UserType
            title="Deliveryman"
            image={require('../../Assets/SVG/deliveryman-svg.png')}
            color="#F8F4D9"
            onPress={() =>
              navigation.navigate('Login', {
                userType: 'deliveryman',
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    padding: 0,
    paddingTop: 75,
    height: windowHeight,
  },
  minor: {
    backgroundColor: '#f9fafd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    marginBottom: 70,
    height: windowHeight,
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    marginBottom: 25,
  },
  text: {
    fontSize: 34,
    fontWeight: '500',
    fontFamily: 'inter',
    color: '#051d5f',
    marginBottom: 10,
  },
});

export default SelectType;
