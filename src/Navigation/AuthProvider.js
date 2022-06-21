import React, {createContext, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = React.useState(null);
  const [userType, setUserType] = React.useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userType,
        // login with email and password
        login: async (email, password, type) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            setUserType(type);
            await AsyncStorage.setItem('userType', type);
          } catch (error) {
            alert(error.message);
          }
        },

        // Google Sign in method
        googleLogin: async type => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);

            // Check if the user already exists
            const user = await auth().currentUser;
            await firestore()
              .collection('users')
              .where('email', '==', user.email)
              .where('type', '==', type)
              .get()
              .then(result => {
                if (result.empty) {
                  firestore()
                    .collection('users')
                    .doc(user.uid + '_' + type.substring(0, 1))
                    .set({
                      id: user.uid + '_' + type.substring(0, 1),
                      email: user.email,
                      type: type,
                      name: user.displayName,
                      avatar: user.photoURL,
                      blocked: false,
                      payments: [],
                      phoneNumber: '',
                    });
                }
              })
              .then(() => {
                AsyncStorage.setItem('userType', type);
              })
              .catch(error => {
                alert(error.message);
              });

            setUserType(type);
          } catch (error) {
            console.log(error);
          }
        },

        // Register with email and password
        register: async (name, email, password, type) => {
          try {
            const user = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );

            user.user.updateProfile({
              displayName: name,
              photoURL: 'https://picsum.photos/300',
            });

            const id = uuidv4();
            await firestore().collection('users').doc(id).set({
              id: id,
              email: email,
              type: type,
              name: name,
              avatar: 'https://i.pravatar.cc/300',
              blocked: false,
              payments: [],
              phoneNumber: '',
            });

            await AsyncStorage.setItem('userType', type);
            setUserType(type);
          } catch (error) {
            console.log(error);
          }
        },

        // Logout method
        logout: async () => {
          try {
            await auth().signOut();
            await AsyncStorage.removeItem('userType');
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
