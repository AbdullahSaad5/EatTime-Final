import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import IonicIcon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const HistoryCard = ({id, address, date, navigation}) => {
  return (
    <View>
      <Card style={{marginBottom: 0}}>
        <Card.Content
          style={{
            borderColor: 'black',
            borderRadius: 15,
            width: 365,
            height: 135,
            marginLeft: 25,
            borderStyle: 'dashed',
            marginTop: 0,
            shadowColor: 'black',
            borderWidth: 1.25,
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: 2.5,
            }}>
            Order ID: {id}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 2.5,
            }}>
            <MaterialIcon name="location-pin" size={20} color="black" />
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Regular',
                fontWeight: 'bold',
                fontSize: 12.5,
              }}>
              {address}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <IonicIcon
                name="time-sharp"
                style={{marginRight: 4}}
                size={21}></IonicIcon>
              <Text
                style={{
                  color: '#333',
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  fontSize: 12.5,
                  width: 115,
                  height: 14,
                }}>
                {date}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 47,
                marginTop: 14,
                width: 135,
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('Delivery Details');
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
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({});
