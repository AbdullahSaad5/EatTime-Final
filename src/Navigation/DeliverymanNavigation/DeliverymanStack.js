import {View, Button, Text, Image} from 'react-native';

import React, {useContext} from 'react';

import Support from '../../Screens/DeliverymanScreens/Support';

import IonicIcon from 'react-native-vector-icons/Ionicons';
import DeliveryContent from '../../Components/DeliverymanComponents/DeliveryContent';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from '../AuthProvider';

import TabNavigator from './TabNavigation';
import AccountScreens from './Account_navigate';

const Drawer = createDrawerNavigator();

const DeliverymanStack = () => {
  const {user} = useContext(AuthContext);
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DeliveryContent
          {...props}
          name={user.displayName}
          email={user.email}
          avatar={user.photoURL}
          screen="Deliveryman Portal"
        />
      )}
      screenOptions={{
        drawerItemStyle: {borderRadius: 9},
        headerShown: false,
        drawerActiveBackgroundColor: '#007EFF',
        drawerActiveTintColor: '#fff',
        drawerStyle: {borderRadius: 5.5},
        drawerLabelStyle: {fontSize: 17, fontWeight: 'bold', marginLeft: -20},
      }}>
      <Drawer.Screen
        name="My Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => (
            <IonicIcon name="home-outline" size={30}></IonicIcon>
          ),
        }}
      />

      <Drawer.Screen
        name="Account Setting"
        component={AccountScreens}
        options={{
          drawerIcon: () => (
            <IonicIcon name="settings-outline" size={30}></IonicIcon>
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: () => (
            <IonicIcon name="call-outline" size={30}></IonicIcon>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DeliverymanStack;
