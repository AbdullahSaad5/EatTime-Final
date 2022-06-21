import React from 'react';

import Screens from './Deliveries';
import AccountScreens from './Account_navigate';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Screens"
      screenOptions={{
        headerShown: false,
        activeTintColor: '#333',
        inactiveTintColor: '#d9d9d9',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
      }}>
      <Tab.Screen
        name="Screens"
        component={Screens}
        options={{
          tabBarIcon: () => <IonicIcon name="home" size={30}></IonicIcon>,
        }}
      />
      <Tab.Screen
        name="Account_Settings"
        component={AccountScreens}
        options={{
          tabBarIcon: () => (
            <IonicIcon name="settings-sharp" size={30}></IonicIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
