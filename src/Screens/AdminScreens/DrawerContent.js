import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import OctiIcon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {AuthContext} from '../../Navigation/AuthProvider';

const DrawerContent = props => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: user.photoURL,
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{user.displayName}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <OctiIcon name="home" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate('Overview');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <FeatherIcon name="users" color={color} size={size} />
                )}
                label="Manage Users"
                onPress={() => {
                  props.navigation.navigate('Users');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <AntDesign name="book" color={color} size={size} />
                )}
                label="Manage Recipes"
                onPress={() => {
                  props.navigation.navigate('Recipes');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <MaterialCommunityIcon
                    name="bike"
                    color={color}
                    size={size}
                  />
                )}
                label="Manage Deliverymen"
                onPress={() => {
                  props.navigation.navigate('Deliverymen');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <IoniIcon name="settings-outline" color={color} size={size} />
                )}
                label="Account Settings"
                onPress={() => {
                  props.navigation.navigate('Overview');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <AntDesign name="logout" color={color} size={size} />
                )}
                label="Logout"
                onPress={() => {
                  logout();
                }}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 15,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
});
