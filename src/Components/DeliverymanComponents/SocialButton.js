import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowHeight} from '../Utils/Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  let fontColor = color;
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome
          name={btnType}
          style={styles.icon}
          size={22}
          color={color}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: fontColor}]}>
          {buttonTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '65%',
    height: windowHeight / 15,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 3,
    flexDirection: 'row',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
