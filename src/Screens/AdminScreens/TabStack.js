import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import UserManagementPage from '../../Parts/AdminParts/UserManagementPage';
import StatsPage from '../../Parts/AdminParts/StatsPage';
import RecipeManagementPage from '../../Parts/AdminParts/RecipeManagementPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default function TabStack() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={StatsPage} />
      <Tab.Screen name="Users" component={UserManagementPage} />
      <Tab.Screen name="Recipes" component={RecipeManagementPage} />
      <Tab.Screen name="Deliverymen" component={UserManagementPage} />
    </Tab.Navigator>
  );
}
