import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {AuthContext} from '../../Navigation/AuthProvider';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {useContext} from 'react';

const DeliveryContent = props => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View
      style={{flex: 1, marginLeft: 1, marginTop: 22, justifyContent: 'center'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 15,
            marginBottom: 5,
          }}>
          <Image
            source={{
              uri: props.avatar,
            }}
            style={{height: 50, width: 50, borderRadius: 40, marginTop: 0}}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#1C1C1C',
                fontSize: 19,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}>
              {props.name}
            </Text>
            <Text style={{color: '#757575', fontFamily: 'Roboto-Regular'}}>
              {props.email}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
          <DrawerItem
            labelStyle={{
              fontSize: 17,
              fontWeight: 'bold',
              marginLeft: -20,
            }}
            icon={() => <IonicIcon name="log-out-outline" size={30} />}
            label="Logout"
            onPress={() => logout()}></DrawerItem>
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
                marginLeft: 9,
                fontWeight: 'bold',
              }}>
              {props.screen}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryContent;
