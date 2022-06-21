import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import AddRecipeInfo from '../../Parts/AdminParts/AddRecipeInfo';
import AddRecipeIngredients from '../../Parts/AdminParts/AddRecipeIngredients';
import AddRecipeTitle from '../../Parts/AdminParts/AddRecipeTitle';
import AddRecipeDirections from '../../Parts/AdminParts/AddRecipeDirections';
import AddAdditionalInfo from '../../Parts/AdminParts/AddAdditionalInfo';
import TextNavbar from '../../Components/AdminComponents/TextNavbar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useIsFocused} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function AddRecipe({route}) {
  let data;
  if (route.params) {
    data = route.params.item;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <TextNavbar text="Add Recipe" />,
      }}>
      <Stack.Screen
        name="Add Recipe Title"
        component={AddRecipeTitle}
        initialParams={data && {data: data, mode: 'edit'}}
      />
      <Stack.Screen name="Add Recipe Info" component={AddRecipeInfo} />
      <Stack.Screen
        name="Add Recipe Ingredients"
        component={AddRecipeIngredients}
      />
      <Stack.Screen
        name="Add Recipe Directions"
        component={AddRecipeDirections}
      />
      <Stack.Screen name="Add Additional Info" component={AddAdditionalInfo} />
    </Stack.Navigator>
  );
}
