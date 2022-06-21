import React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const OrderItem = ({image, quantity, foodItem, amount}) => {
  return (
    <View>
      <View style={{borderTopWidth: 0.5, borderTopColor: '#cccccc'}}></View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{marginRight: 10}} size={24} source={image} />

          <View>
            <Text
              style={{
                color: '#1C1C1C',
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {foodItem}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter',
                  color: '#1C1C1C',
                }}>
                Quantity:{' '}
              </Text>
              <Text style={{color: '#007EFF'}}>{quantity} </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 12,
              color: '#1C1C1C',
            }}>
            Amount
          </Text>
          <Text style={{color: '#007EFF'}}> Rs. {amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
