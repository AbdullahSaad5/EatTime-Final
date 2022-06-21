import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {CartContext} from './CartContext';

export default function SlidingPanel({data, position, setPosition}) {
  const [count, setCount] = useState(1);
  const {addToCart} = useContext(CartContext);
  return (
    <React.Fragment>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.blur,
          {
            display: position == 0 ? 'flex' : 'none',
          },
        ]}
        onPress={() => {
          setCount(1);
          setPosition('-100%');
        }}></TouchableOpacity>
      <View style={[styles.slidePanel, {bottom: position}]}>
        <View style={styles.slidePanelHeader}>
          <Image
            source={{
              uri: data.picture,
            }}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.name}>{data.title}</Text>
            <Text style={styles.price}>Rs. {data.price}</Text>
          </View>

          <View style={styles.counter}>
            <TouchableOpacity
              style={styles.countButtons}
              onPress={() => {
                count > 1 && setCount(count - 1);
              }}>
              <Feather name="minus" size={20} color="rgba(60,60,67, 60)" />
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              style={styles.countButtons}
              onPress={() => {
                setCount(count + 1);
              }}>
              <Feather name="plus" size={20} color="rgba(60,60,67, 60)" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slidePanelBody}>
          <TouchableOpacity
            style={styles.slidePanelOption}
            onPress={() => {
              addToCart({
                ...data,
                quantity: count,
              });
              setCount(1);
              setPosition('-100%');
            }}>
            <Text style={styles.slidePanelOptionText}>Add to Cart</Text>
            <Feather name="shopping-cart" size={20} color={'#2AC769'} />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  slidePanel: {
    position: 'absolute',

    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: -1000,
      height: -1000,
    },
    shadowOpacity: 1,
    shadowRadius: 1000,

    elevation: 5,
  },
  slidePanelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75,75,75,0.15)',
    paddingVertical: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  userDetails: {
    marginLeft: 20,
    flex: 1,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1c1c',
    marginHorizontal: 10,
  },
  countButtons: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'rgba(120, 120, 120, .28)',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1c1c',
  },
  price: {
    fontSize: 18,
    color: '#686777',
    fontWeight: '600',
  },
  slidePanelOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    padding: 20,

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75,75,75,0.15)',
  },
  slidePanelOptionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2AC769',
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
