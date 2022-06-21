import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from '../../Screens/UserScreens/MainTabScreen';
import React, {useState, createContext} from 'react';
import DrawerContent from '../../Screens/UserScreens/DrawerContent';
import CartScreen from '../../Screens/UserScreens/CartScreen';
import PaymentScreen from '../../Screens/UserScreens/PaymentScreen';
import SupportScreen from '../../Screens/UserScreens/SupportScreen';
import ShopScreen from '../../Screens/UserScreens/ShopScreen';
import RecipesDetails from '../../Screens/UserScreens/RecipeDetails';
import PasswordScreen from '../../Screens/UserScreens/PasswordScreen';
import PersonalinfoScreen from '../../Screens/UserScreens/PersonalinfoScreen';
import AddCardScreen from '../../Screens/UserScreens/AddCardScreen';
import SelectPayment from '../../Screens/UserScreens/SelectPayment';
import {CartProvider} from '../../Components/UserComponents/CartContext';

const Drawer = createDrawerNavigator();

const UserStack = () => {
  return (
    <CartProvider>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: 'blue',
        }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name=" " component={MainTabScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            title: 'Manage Payments',
          }}
        />
        <Drawer.Screen name="Support" component={SupportScreen} />
        <Drawer.Screen name="Shop" component={ShopScreen} />

        <Drawer.Screen
          name="Browse"
          component={RecipesDetails}
          options={{headerShown: false}}
        />

        <Drawer.Screen
          name="Password"
          component={PasswordScreen}
          options={{
            title: 'Change Password',
          }}
        />

        <Drawer.Screen
          name="Info"
          component={PersonalinfoScreen}
          options={{
            title: 'Edit Profile',
          }}
        />
        <Drawer.Screen
          name="NewCard"
          component={AddCardScreen}
          options={{
            title: 'Add New Card',
          }}
        />
        <Drawer.Screen
          name="SelectPayment"
          component={SelectPayment}
          options={{
            title: 'Select Payment Option',
          }}
        />
      </Drawer.Navigator>
    </CartProvider>
  );
};

export default UserStack;
