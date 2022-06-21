import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AuthStack from './AuthStack';
import UserStack from './UserNavigation/UserStack';
import AdminStack from './AdminNavigation/AdminStack';
import DeliverymanStack from './DeliverymanNavigation/DeliverymanStack';

import React, {useEffect, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routes = () => {
  const {user, setUser, userType} = useContext(AuthContext);
  const [asyncUserType, setUserType] = useState('');
  const {initializing, setInitializing} = useState(true);
  const [loading, setLoading] = useState(true);

  const onAuthStateChange = user => {
    setUser(user);
    console.log('user', user);
  };

  useEffect(() => {
    AsyncStorage.getItem('userType').then(userType => {
      setUserType(userType);
      console.log(userType);
      setLoading(false);
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    //   <NavigationContainer>
    //     {user ? (
    //       loading ? (
    //         <View>
    //           <Text>Loading...</Text>
    //         </View>
    //       ) : userType === 'customer' ? (
    //         <UserStack />
    //       ) : userType === 'admin' ? (
    //         <AdminStack />
    //       ) : (
    //         <DeliverymanStack />
    //       )
    //     ) : (
    //       <AuthStack />
    //     )}
    //   </NavigationContainer>
    // );

    <NavigationContainer>
      {user ? (
        userType ? (
          userType === 'customer' ? (
            <UserStack />
          ) : userType === 'admin' ? (
            <AdminStack />
          ) : (
            <DeliverymanStack />
          )
        ) : loading ? (
          <View>
            <Text>Loading...</Text>
          </View>
        ) : asyncUserType === 'customer' ? (
          <UserStack />
        ) : asyncUserType === 'admin' ? (
          <AdminStack />
        ) : (
          <DeliverymanStack />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
