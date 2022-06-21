import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Recipes from './Recipes';
import Orders from './Orders';
import ShopScreen from './ShopScreen';
import Settings from './Settings';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {TouchableOpacity} from 'react-native';

const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{backgroundColor: '#FFFFFF'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={ShopScreen}
        options={{
          title: 'Orders',
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => (
            <Icon name="basket-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={Recipes}
        options={{
          tabBarLabel: 'Recipes',
          tabBarIcon: ({color}) => (
            <Icon name="ios-fast-food-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Homee"
        component={HomeScreen}
        options={{headerShown: false, title: 'Home'}}
      />
    </HomeStack.Navigator>
  );
};

export default MainTabScreen;
