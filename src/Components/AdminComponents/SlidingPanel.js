import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import firestore from '@react-native-firebase/firestore';

export default function SlidingPanel({user, position, setPosition, mode}) {
  return (
    <React.Fragment>
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.blur,
          {
            display: position == 0 ? 'flex' : 'none',
          },
        ]}
        onPress={() => setPosition('-100%')}></TouchableOpacity>
      <View style={[styles.slidePanel, {bottom: position}]}>
        <View style={styles.slidePanelHeader}>
          <Image source={user.avatar} style={styles.avatar} />
          <View style={styles.userDetails}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.slidePanelBody}>
          <TouchableOpacity
            style={styles.slidePanelOption}
            onPress={() => {
              // firestore().collection('users').doc(user.id).update({
              //   blocked: !user.blocked,
              // });
              // setPosition('-100%');
              console.log(user);
            }}>
            <Text
              style={[
                styles.slidePanelOptionText,
                {
                  color: mode === 'block' ? '#FB4E4E' : '#2AC769',
                },
              ]}>
              {mode === 'block' ? 'Block User' : 'Unblock User'}
            </Text>
            <EntypoIcon
              name="block"
              size={20}
              color={mode === 'block' ? '#FB4E4E' : '#2AC769'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  slidePanel: {
    position: 'absolute',

    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: -1000,
      height: -1000,
    },
    shadowOpacity: 1,
    shadowRadius: 1000,

    elevation: 5,
  },
  slidePanelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75,75,75,0.15)',
    paddingVertical: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userDetails: {
    marginLeft: 20,
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1c1c',
  },
  email: {
    fontSize: 15,
    color: '#1c1c1c',
  },
  slidePanelOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    padding: 20,

    borderBottomWidth: 1,
    borderBottomColor: 'rgba(75,75,75,0.15)',
  },
  slidePanelOptionText: {
    fontSize: 20,
    fontWeight: '500',
  },
  blur: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
