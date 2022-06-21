import React from 'react';
import {View, Button, Text, Image, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import OrderItem from '../../Components/DeliverymanComponents/OrderItem';
import Feather from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const data = [
  {
    image: require('../../Assets/Images/fries.png'),
    quantity: 10,
    foodItem: 'French Fries',
    amount: '100',
  },
  {
    image: require('../../Assets/Images/fries.png'),
    quantity: 10,
    foodItem: 'French Fries',
    amount: '100',
  },
];

const OrderDetails = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Home1')}>
          <EntypoIcon name="chevron-left" size={25} color="black" />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '600',
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#1C1C1C',
            fontSize: 20,
            fontFamily: 'Inter',
          }}>
          Order Details
        </Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../Assets/Icons/hamburger.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 3,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}></View>
        <View
          style={{
            overflow: 'hidden',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            Order ID: 30erfdfddf
          </Text>

          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            12:45 PM | 02-May-2022
          </Text>
        </View>

        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <Text
          style={{
            color: '#333',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 15,
          }}>
          Customer
        </Text>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../Assets/SVG/deliveryman.jpg')}
              style={{height: 60, width: 60, borderRadius: 30}}
            />
            <View
              style={{
                marginLeft: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <Text
                style={{
                  color: '#1C1C1C',
                  fontSize: 24,
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}>
                Noor E hira
              </Text>
              <Feather name="phone" size={24} color="#1C1C1C" />
            </View>
          </View>
        </SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 10,
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Shipping Address:{' '}
          </Text>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',

              fontSize: 16,
            }}>
            215, Street 11, Pakistan Town
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
            paddingHorizontal: 20,
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Billing Address:{' '}
          </Text>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',

              fontSize: 16,
            }}>
            215, Street 11, Pakistan Town
          </Text>
        </View>
        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Payment Status:{' '}
          </Text>
          <Text
            style={{
              color: '#348C31',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Paid
          </Text>
        </View>

        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        {data.map((item, index) => {
          return (
            <OrderItem
              key={index}
              image={item.image}
              amount={item.amount}
              quantity={item.quantity}
              foodItem={item.foodItem}
            />
          );
        })}

        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 15,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bold',
              color: '#1C1C1C',
              fontSize: 13,
            }}>
            Items price:
          </Text>
          <Text
            style={{
              fontFamily: 'Inter',
              color: '#007EFF',
            }}>
            Rs. 3000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 15,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bold',
              color: '#1C1C1C',
              fontSize: 13,
            }}>
            Shipping price:
          </Text>
          <Text
            style={{
              fontFamily: 'Inter',

              color: '#007EFF',
            }}>
            Rs. 180
          </Text>
        </View>
        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bold',
              color: '#1C1C1C',
              fontSize: 13,
            }}>
            Total price:
          </Text>
          <Text
            style={{
              fontFamily: 'Inter',
              color: '#007EFF',
            }}>
            Rs. 3180
          </Text>
        </View>

        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <TouchableOpacity
          style={{
            marginLeft: 135,
            marginBottom: 34,
            marginTop: 20,
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;
