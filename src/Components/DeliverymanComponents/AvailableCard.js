import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const AvailableCard = ({data}) => {
  return (
    <Card style={{marginBottom: 0}}>
      <Card.Content
        style={{
          borderColor: 'black',
          borderRadius: 15,
          width: 365,
          height: 130,
          marginLeft: 25,

          marginBottom: 0,
          shadowColor: 'black',
          borderWidth: 1.25,
        }}>
        <Text
          style={{
            color: '#333',
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
            fontWeight: 'bold',
          }}>
          Order ID: {data.id}
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <MaterialIcon name="location-pin" size={20} color="black" />
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Regular',
              fontWeight: 'bold',
              fontSize: 13,
            }}>
            House 123, Street 10, Park Road
          </Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              marginTop: 10,
              width: 140,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Order Details');
            }}>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              View Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              marginTop: 10,
              width: 150,
              padding: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#007EFF',
            }}
            onPress={() => {
              <Text></Text>;
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  );
};

export default AvailableCard;

const styles = StyleSheet.create({});
