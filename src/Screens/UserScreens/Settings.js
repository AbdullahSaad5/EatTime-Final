import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../Navigation/AuthProvider';

const Settings = ({navigation}) => {
  const [tap, setTap] = React.useState(false);
  const {user, logout} = React.useContext(AuthContext);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.top}>
        <Avatar.Image
          source={{
            uri: user.photoURL,
          }}
          size={60}
        />
        <Text style={styles.title}>{user.displayName}</Text>
        <Text style={styles.caption}>{user.email}</Text>
        <TouchableOpacity style={styles.identified}>
          <MaterialIcons name="verified-user" size={22} color="white" />
          <Text style={styles.identifiedText}>Identified</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={[
            styles.Subitem,
            {
              borderBottomWidth: 1,
              borderBottomColor: '#E0E0E0',
              paddingBottom: 7,
            },
          ]}
          onPress={() => setTap(!tap)}>
          <View style={styles.subSub}>
            <Ionicons name="hand-left-outline" size={26} color="black" />
            <Text style={styles.text}>Accounts and Settings</Text>
          </View>
          <AntDesign
            name={!tap ? 'right' : 'down'}
            size={15}
            color="grey"
            style={styles.right}
          />
        </TouchableOpacity>
        {tap == true ? (
          <>
            <TouchableOpacity
              style={styles.Subitem}
              onPress={() => navigation.navigate('Info')}>
              <View style={styles.subSub}>
                <AntDesign name="info" size={23} color="black" />
                <Text style={styles.text}>Edit Personal Information</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Subitem}
              onPress={() => navigation.navigate('Password')}>
              <View style={styles.subSub}>
                <Ionicons name="key-outline" size={23} color="black" />
                <Text style={styles.text}>Change Password</Text>
              </View>
            </TouchableOpacity>
          </>
        ) : null}

        <TouchableOpacity
          style={styles.Subitem}
          onPress={() => navigation.navigate('Payment')}>
          <View style={styles.subSub}>
            <AntDesign name="creditcard" size={26} color="black" />
            <Text style={styles.text}>Cards and Payments</Text>
          </View>
          <AntDesign name="right" size={15} color="grey" style={styles.right} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={[
            styles.Subitem,
            {
              borderBottomWidth: 1,
              borderBottomColor: '#E0E0E0',
              paddingBottom: 7,
            },
          ]}>
          <View style={styles.subSub}>
            <Feather name="info" size={26} color="black" />
            <Text style={styles.text}>About Us</Text>
          </View>
          <AntDesign name="right" size={15} color="grey" style={styles.right} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.Subitem}>
          <View style={styles.subSub}>
            <AntDesign name="download" size={26} color="black" />
            <Text style={styles.text}>App Version: 1.0.12</Text>
          </View>
          <AntDesign name="right" size={15} color="grey" style={styles.right} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.Subitem}
          onPress={() => {
            logout();
          }}>
          <View style={styles.subSub}>
            <AntDesign name="logout" size={26} color="black" />
            <Text style={styles.text}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  top: {
    marginTop: 15,
    marginLeft: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginTop: 10,
  },
  caption: {
    fontSize: 15,
    color: '#3C3C4399',
  },
  identified: {
    flexDirection: 'row',
    marginTop: 10,
    width: '90%',
    backgroundColor: '#2AC769',
    borderRadius: 50,
    padding: 14,
    alignItems: 'center',
  },
  identifiedText: {
    fontSize: 22,
    color: '#fff',
    marginLeft: 17,
  },
  section: {
    marginTop: 11,
    width: '100%',
    paddingLeft: '5%',
    backgroundColor: '#fff',
  },
  Subitem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    width: '100%',
    paddingLeft: '5%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 17,
    color: '#1C1C1E',
    marginLeft: 15,
    textAlign: 'left',
  },
  right: {
    marginLeft: '32%',
    marginRight: 10,
  },
  subSub: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
