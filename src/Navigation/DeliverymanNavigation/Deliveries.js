import React from 'react';
import {View, Button, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/DeliverymanScreens/HomeScreen';
import OrderDetails from '../../Screens/DeliverymanScreens/OrderDetail';
import DeliveryDetail from '../../Screens/DeliverymanScreens/DeliveryDetail';
const Stack = createStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        Options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Order Details"
        component={OrderDetails}
        Options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Delivery Details"
        component={DeliveryDetail}
        Options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Screens;
