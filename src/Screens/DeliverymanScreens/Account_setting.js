import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../../Navigation/AuthProvider';
import {ScrollView} from 'react-native-gesture-handler';

const Account_setting = ({navigation}) => {
  const [tap, setTap] = React.useState(false);
  const {logout} = React.useContext(AuthContext);

  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <View style={styles.top}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            source={require('../../Assets/SVG/deliveryman.jpg')}
            size={60}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Screens')}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Noor e hira</Text>
        <Text style={styles.caption}>Noor e hira@gmail.com </Text>
        <TouchableOpacity style={styles.identified}>
          <MaterialIcons name="verified-user" size={22} color="white" />
          <Text style={styles.identifiedText}>Identified</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.section}>
          <TouchableOpacity
            style={[
              styles.Subitem,
              {
                marginTop: 20,
                paddingBottom: 10,
              },
            ]}
            onPress={() => setTap(!tap)}>
            <View style={styles.subSub}>
              <Ionicons name="hand-left-outline" size={26} color="black" />
              <Text style={styles.text1}>Delivery Account Setting</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 3,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}></View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <AntDesign name="creditcard" size={26} color="black" />
              <Text style={styles.text}>Cards and Payments</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 3,
            marginTop: 5,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}></View>

        <View style={styles.section}>
          <TouchableOpacity
            style={styles.Subitem}
            onPress={() => navigation.navigate('Edit profile')}>
            <View style={styles.subSub}>
              <AntDesign name="info" size={23} color="black" />
              <Text style={styles.text1}>Edit Personal Information</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Subitem}
            onPress={() => navigation.navigate('Change password')}>
            <View style={styles.subSub}>
              <Ionicons name="key-outline" size={23} color="black" />
              <Text style={styles.text1}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 3,
            marginTop: 5,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}></View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <AntDesign name="download" size={26} color="black" />
              <Text style={styles.text}>App Version: 1.0.12</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Subitem,
              {
                borderBottomColor: '#E0E0E0',
                paddingBottom: 7,
              },
            ]}>
            <View style={styles.subSub}>
              <Feather name="info" size={26} color="black" />
              <Text style={styles.text}>About Us</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            padding: 3,
            marginTop: 3,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}></View>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.Subitem}
            onPress={() => {
              logout();
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}>
              <AntDesign name="logout" size={26} color="black" />
              <Text style={styles.text1}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account_setting;

const styles = StyleSheet.create({
  top: {
    marginTop: 15,
    marginLeft: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginTop: 3,
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
    padding: 24,
    alignItems: 'center',
  },
  identifiedText: {
    fontSize: 22,
    color: '#fff',
    marginLeft: 17,
    fontWeight: 'bold',
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
  text1: {
    fontSize: 17,
    color: '#1C1C1E',
    marginLeft: 15,
    textAlign: 'left',
    fontWeight: 'bold',
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
