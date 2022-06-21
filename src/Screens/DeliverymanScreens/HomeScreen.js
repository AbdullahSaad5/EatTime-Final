import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {AuthContext} from '../../Navigation/AuthProvider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import AvailableCard from '../../Components/DeliverymanComponents/AvailableCard';
import HistoryCard from '../../Components/DeliverymanComponents/HistoryCard';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

import IonicIcon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();

//

const dataHistory = [
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
];
// const data = [
//   {
//     id: '30erfdfddf',
//     address: '215, street11, Pakistan Town',
//   },
//   {
//     id: '30erfdfddf',
//     address: '215, street11, Pakistan Town',
//   },
//   {
//     id: '30erfdfddf',
//     address: '215, street11, Pakistan Town',
//   },
//   {
//     id: '30erfdfddf',
//     address: '215, street11, Pakistan Town',
//   },
// ];
const HomeScreen = ({navigation}) => {
  const [shouldShow, setShouldShow] = useState(true);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [data, setData] = useState([]);
  const [delivered, setDelivered] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    firestore()
      .collection('orders')
      .where('status', '==', 'pending')
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });
        setData(newData);
      });

      
  }, [isFocused]);

  const {user} = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Image
            source={{
              uri: user.photoURL,
            }}
            style={{height: 60, width: 60, borderRadius: 30}}
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#1C1C1C',
                  fontSize: 19,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}>
                {user.displayName}
              </Text>
              <Text
                style={{
                  color: '#1C1C1E',
                  fontFamily: 'Roboto-Regular',
                }}>
                Deliveryman Panel
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={require('../../Assets/Icons/hamburger.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity
            style={{
              marginLeft: 39,
              marginRight: 65,
            }}
            onPress={() => {
              setShouldShow2(false);
              setShouldShow(true);
            }}>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Deliveries Available
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShouldShow2(true);
              setShouldShow(false);
            }}>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Delivery History
            </Text>
          </TouchableOpacity>
        </View>

        {shouldShow ? (
          <View style={{marginBottom: 0, marginTop: 15}}>
            {data.map((item, index) => {
              return (
                <View style={{marginBottom: 0, marginTop: 16}} key={index}>
                  <AvailableCard key={index} data={item} />
                </View>
              );
            })}
          </View>
        ) : null}
        {shouldShow2 ? (
          <View style={{marginBottom: 0, marginTop: 15}}>
            {dataHistory.map((item, index) => {
              return (
                <View style={{marginBottom: 0, marginTop: 16}}>
                  <HistoryCard
                    key={index}
                    data={item}
                    navigation={navigation}
                  />
                </View>
              );
            })}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
