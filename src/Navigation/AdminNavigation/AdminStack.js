import React from 'react';
import TabStack from '../../Screens/AdminScreens/TabStack';
import {NavigationContainer} from '@react-navigation/native';
import AvatarNavbar from '../../Components/AdminComponents/AvatarNavbar';
import Avatar from '../../Assets/Images/Avatar.jpg';
import TextNavbar from '../../Components/AdminComponents/TextNavbar';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {useContext} from 'react';
import {AuthContext} from '../../Navigation/AuthProvider';

import AddRecipe from '../../Screens/AdminScreens/AddRecipe';
import DrawerContent from '../../Screens/AdminScreens/DrawerContent';

export default function AdminStack() {
  const Drawer = createDrawerNavigator();
  const {user} = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        header: props => <TextNavbar text={props.route.name} />,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Admin HomeScreen"
        component={TabStack}
        options={{
          header: props => (
            <AvatarNavbar name={user.displayName} avatar={user.photoURL} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Recipe"
        component={AddRecipe}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
