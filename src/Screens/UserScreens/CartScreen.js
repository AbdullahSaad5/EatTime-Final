import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {CartContext} from '../../Components/UserComponents/CartContext';

const CartScreen = ({navigation}) => {
  const {cart, clearCart} = useContext(CartContext);
  const delivery = 300;
  const total =
    cart.length > 0
      ? cart.map(item => item.price * item.quantity).reduce((a, b) => a + b)
      : 0;
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>
        In the Cart, {cart.length} {cart.length == 1 ? 'Dish' : 'Dishes'} for
        Rs. {total}
      </Text>
      {cart.map(item => (
        <View style={styles.Minicontainer}>
          <View style={styles.Left}>
            <Image
              source={{
                uri: item.picture,
              }}
              style={styles.TopImg}
            />
          </View>
          <View style={styles.Right}>
            <Text style={[styles.Text, {paddingLeft: 0}]}>{item.title}</Text>
            <View style={styles.RightBottom}>
              <View style={styles.RightBottomRight}>
                <TouchableOpacity
                  onPress={() => {
                    item.quantity > 1 && item.quantity++;
                  }}>
                  <AntDesign
                    name="minus"
                    size={20}
                    color="grey"
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity>
                  <AntDesign
                    name="plus"
                    size={20}
                    color="grey"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <Text>{item.price}</Text>
            </View>
          </View>
        </View>
      ))}
      <View
        style={[
          styles.delivery,
          {
            display: cart.length > 0 ? 'flex' : 'none',
          },
        ]}>
        <View style={styles.deli}>
          <FontAwesome5 name="box" size={21} color="black" />
          <Text style={styles.Text}>Delivery</Text>
        </View>
        <Text style={styles.Text}>Rs. {delivery}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={clearCart}>
          <Text style={styles.Text}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkout}
          onPress={() => navigation.navigate('SelectPayment')}>
          <Text style={[styles.Text, {color: 'white'}]}>
            Checkout - Rs. {total + delivery}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 15,
  },
  HeaderText: {
    width: '100%',
    fontSize: 28,
    fontWeight: '500',
    color: '#1c1c1c',
    marginLeft: 15,
    marginBottom: 10,
  },
  Minicontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 2,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  TopImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 17,
  },
  Left: {
    width: 80,
    height: 80,
    borderRadius: 17,
    overflow: 'hidden',
  },
  Right: {
    flex: 1,
    paddingHorizontal: 15,
  },
  RightBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  RightBottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1c',
    marginHorizontal: 9,
  },
  delivery: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  deli: {
    flexDirection: 'row',
  },

  Text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1c',
    paddingLeft: 15,
  },
  btn: {
    backgroundColor: '#eee',
    padding: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkout: {
    backgroundColor: '#1c1c1e',
    padding: 15,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
