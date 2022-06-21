import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

const AddCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [addresLine1, setAddresLine1] = useState('');
  const [addresLine2, setAddresLine2] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.Top}>
        <TextInput
          value={cardNumber}
          onChangeText={text => setCardNumber(text)}
          mode="outlined"
          label="Card Number"
          placeholder="Card Number"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
        <View style={styles.TopMiddle}>
          <TextInput
            value={cardExpiry}
            onChangeText={text => setCardExpiry(text)}
            mode="outlined"
            label="Expiry Date"
            placeholder="Expiry Date"
            theme={{
              colors: {
                primary: '#007EFF',
                underlineColor: 'transparent',
                background: '#fff',
              },
            }}
            style={styles.TopMiddleInput}
          />
          <TextInput
            value={cardCVV}
            onChangeText={text => setCardCVV(text)}
            mode="outlined"
            label="CCV"
            placeholder="CCV"
            secureTextEntry
            theme={{
              colors: {
                primary: '#007EFF',
                underlineColor: 'transparent',
                background: '#fff',
              },
            }}
            style={styles.TopMiddleInput}
          />
        </View>
        <TextInput
          value={cardholderName}
          onChangeText={text => setCardholderName(text)}
          mode="outlined"
          label="Cardholder Name"
          placeholder="Cardholder Name"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>

      <View style={styles.Bottom}>
        <Text style={styles.text}>Billing Address</Text>
        <TextInput
          value={addresLine1}
          onChangeText={text => setAddresLine1(text)}
          mode="outlined"
          label="Address Line 1"
          placeholder="Enter Address Line 1"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
        <TextInput
          value={addresLine2}
          onChangeText={text => setAddresLine2(text)}
          mode="outlined"
          label="Address Line 2"
          placeholder="Enter Address Line 2"
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 15,
  },
  Top: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    paddingHorizontal: 20,
    borderRadius: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 30,
  },
  TopMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 25,
  },
  TopMiddleInput: {
    width: '45%',
  },
  Bottom: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    paddingHorizontal: 20,
    borderRadius: 17,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#1c1c1c',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#007EFF',
    padding: 10,
    borderRadius: 17,
    marginTop: 19,
  },
});
