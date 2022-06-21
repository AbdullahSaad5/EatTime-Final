import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import React from 'react';

const PasswordScreen = () => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          value={oldPassword}
          onChangeText={setOldPassword}
          mode="outlined"
          label="Current Password"
          placeholder="Current Password"
          secureTextEntry
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
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
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
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
          theme={{
            colors: {
              primary: '#007EFF',
              underlineColor: 'transparent',
              background: '#fff',
            },
          }}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 20,
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
