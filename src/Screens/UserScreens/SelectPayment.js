import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../../Navigation/AuthProvider';
import {CartContext} from '../../Components/UserComponents/CartContext';

const data = [
  {
    id: 1,
    cardNumber: '**** **** **** 8841',
  },
  {
    id: 2,
    cardNumber: '**** **** **** 8842',
  },

  {
    id: 3,
    cardNumber: '**** **** **** 8843',
  },
  {
    id: 3,
    cardNumber: '**** **** **** 8843',
  },
  {
    id: 3,
    cardNumber: '**** **** **** 8843',
  },
];

const SelectPayment = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const {cart, clearCart} = useContext(CartContext);
  return (
    <ScrollView style={styles.Maincontainer}>
      {data.map(item => (
        <TouchableOpacity style={styles.container}>
          <Image
            source={require('../../Assets/Icons/mastercard.png')}
            style={styles.cardImg}
          />
          <Text style={styles.text}>{item.cardNumber}</Text>
        </TouchableOpacity>
      ))}
      <View>
        <TouchableOpacity
          style={styles.addCard}
          onPress={() => {
            navigation.navigate('NewCard');
          }}>
          <AntDesign name="plus" size={19} color="#000" style={styles.add} />
          <Text style={styles.addCardText}>Add a new Card</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          firestore()
            .collection('orders')
            .add({
              user: user.uid,
              cart: cart.map(item => ({
                productID: item.id,
                quantity: item.quantity,
              })),
              status: 'pending',
            })
            .then(() => {
              alert('Order Placed Successfully');
              clearCart();
              navigation.navigate('Home');
            })
            .catch(error => {
              console.log(error);
            });
        }}>
        <Text style={styles.txt}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SelectPayment;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 37,
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1c1c1c',
    marginHorizontal: 10,
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    marginHorizontal: 10,
  },
  addCardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1c1c1c',
    marginHorizontal: 10,
  },
  add: {
    marginRight: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: '#007EFF',
    padding: 15,
    marginVertical: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
  cardImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
