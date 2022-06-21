import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {windowHeight, windowWidth} from '../../Utils/Dimensions';

const FormInput = ({labelValue, placeholderText, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={labelValue}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#ccc',
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  // iconStyle: {
  //   padding: 10,
  //   height: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRightColor: '#ccc',
  //   borderRightWidth: 1,
  //   width: 50,
  // },
  input: {
    padding: 10,
    marginTop: 9,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    marginLeft: 9,
    color: '#000',
  },
});

// import AntDesign from 'react-native-vector-icons/AntDesign';

// <View style={styles.iconStyle}>
//         <AntDesign name={iconType} size={25} color="#666" />
//       </View>

//   iconStyle: {
//     padding: 10,
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRightColor: '#ccc',
//     borderRightWidth: 1,
//     width: 50,
//   },
