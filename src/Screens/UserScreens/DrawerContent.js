import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
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
                  <Icon name="home-outline" color={color} size={size} />
                )}
                label="Home"
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
                activeTintColor="#e91e63"
                activeBackgroundColor="red"
              />
              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <Icon name="basket-outline" color={color} size={size} />
                )}
                label="Orders"
                onPress={() => {
                  props.navigation.navigate('Orders');
                }}
              />
              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <Icon name="food-outline" color={color} size={size} />
                )}
                label="Recipes"
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
                  <Icon name="cart-check" color={color} size={size} />
                )}
                label="View My Cart"
                onPress={() => {
                  props.navigation.navigate('Cart');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <AntDesign name="creditcard" color={color} size={size} />
                )}
                label="Payment Methods"
                onPress={() => {
                  props.navigation.navigate('Payment');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <AntDesign name="setting" color={color} size={size} />
                )}
                label="Account Settings"
                onPress={() => {
                  props.navigation.navigate('Settings');
                }}
              />

              <DrawerItem
                labelStyle={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginLeft: -5,
                }}
                icon={({color, size}) => (
                  <Feather name="phone-call" color={color} size={size} />
                )}
                label="Support"
                onPress={() => {
                  props.navigation.navigate('Support');
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
    paddingLeft: 20,
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
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawnSection: {
    marginTop: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
