import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
];

const PaymentScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.Maincontainer}>
      {data.map((item, index) => (
        <TouchableOpacity style={styles.container} key={index}>
          <Text style={styles.text}>{item.cardNumber}</Text>
          <View style={styles.icon}>
            <SimpleLineIcons name="pencil" size={19} color="#5076ED" />
            <AntDesign
              name="delete"
              size={19}
              color="#FB4E4E"
              style={{marginHorizontal: 14}}
            />
          </View>
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
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 37,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
