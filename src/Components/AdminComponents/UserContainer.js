import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import IoniIcon from 'react-native-vector-icons/Ionicons';

export default function UserContainer({
  user,
  background,
  setPosition,
  setUser,
}) {
  return (
    <View style={[styles.user, {backgroundColor: background}]}>
      <View style={styles.userDetails}>
        <View>
          <Image source={{uri: user.avatar}} style={styles.userAvatar}></Image>
        </View>
        <View style={styles.userDetailsText}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setUser(user);
            setPosition(0);
          }}>
          <IoniIcon name="settings-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 10,
    marginTop: 10,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDetailsText: {
    marginLeft: 5,
  },
  userAvatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
});
