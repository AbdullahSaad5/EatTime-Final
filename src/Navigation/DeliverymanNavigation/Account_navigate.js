import React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Account_setting from '../../Screens/DeliverymanScreens/Account_setting';
import {TextInput, Avatar} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const Stack = createStackNavigator();

const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{
            marginRight: 57,
            marginLeft: -100,
          }}
          onPress={() => navigation.navigate('Account')}>
          <EntypoIcon name="chevron-left" size={25} color="black" />
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#1C1C1C',
            fontSize: 20,
            fontFamily: 'Inter',
            fontWeight: 'bold',
          }}>
          Change Password
        </Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}>
        <View style={styles.container}>
          <View style={styles.input}>
            <TextInput
              value={oldPassword}
              onChangeText={setOldPassword}
              mode="outlined"
              label="Current Password"
              placeholder="Current Password"
              secureTextEntry
              theme={{colors: {label: 'red', border: 'red'}, roundness: 10}}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              mode="outlined"
              label="New Password"
              placeholder="New Password"
              secureTextEntry
              theme={{colors: {label: 'red', border: 'red'}, roundness: 10}}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              mode="outlined"
              label="Confirm Password"
              placeholder="Confirm Password"
              secureTextEntry
              theme={{colors: {label: 'red', border: 'red'}, roundness: 10}}
            />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const Profiling = ({navigation}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [number, setNumber] = React.useState('');
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{
            marginRight: 87,
            marginLeft: -140,
          }}
          onPress={() => navigation.navigate('Account')}>
          <EntypoIcon name="chevron-left" size={25} color="black" />
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#1C1C1C',
            fontSize: 20,
            fontFamily: 'Inter',
            fontWeight: 'bold',
          }}>
          Edit profile
        </Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}>
        <View style={styles.container}>
          <Avatar.Image
            source={require('../../Assets/SVG/deliveryman.jpg')}
            size={99}
            style={styles.img}
          />
          <View style={styles.input}>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              mode="outlined"
              label="First Name"
              placeholder="First Name"
              theme={{colors: {label: 'red', border: 'red'}, roundness: 10}}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              mode="outlined"
              label="Last Name"
              placeholder="Last Name"
              theme={{colors: {label: 'red', border: 'red'}, roundness: 10}}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={number}
              onChangeText={setNumber}
              mode="outlined"
              label="Contact Number"
              placeholder="Contact Number"
              theme={{colors: {label: 'red', border: 'red'}, roundness: 10}}
            />
          </View>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const AccountScreens = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Account" component={Account_setting} />
      <Stack.Screen name="Edit profile" component={Profiling} />
      <Stack.Screen name="Change password" component={ChangePassword} />
    </Stack.Navigator>
  );
};
export default AccountScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  img: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    marginTop: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#007eef',
    padding: 10,
    borderRadius: 50,
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
