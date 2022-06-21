import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import FormInput from '../../Components/UserComponents/FormInput';
import FormButton from '../../Components/UserComponents/FormButton';

import SocialButton from '../../Components/UserComponents/SocialButton';
import {windowHeight} from '../../Utils/Dimensions';

import {AuthContext} from '../../Navigation/AuthProvider';

const SignupScreen = ({navigation, route}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.minor}>
        <Image
          source={require('../../Assets/Icons/EatTime.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>EatTime!</Text>

        <FormInput
          labelValue={name}
          onChangeText={userName => setName(userName)}
          placeholder="Joe Doe"
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholder="joe.doe@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholder="***************"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign Up"
          onPress={() => register(name, email, password, route.params.userType)}
        />

        {/* <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our
        </Text>
        <TouchableOpacity>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View> */}

        {/* <SocialButton
          buttonTitle="Sign Up with Facebook"
          onPress={() => alert('Sign Up with Facebook')}
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
        /> */}
        {Platform.OS === 'android' ? (
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
          />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.navButtonText}>
          Have an account?{' '}
          <Text style={{color: '#F7893E', fontWeight: '500'}}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    padding: 0,
    paddingTop: 75,
    height: windowHeight,
  },
  minor: {
    backgroundColor: '#f9fafd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    marginBottom: 10,
    height: windowHeight,
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
    marginBottom: 25,
  },
  text: {
    fontSize: 34,
    fontWeight: '400',
    fontFamily: 'inter Neue',
    color: '#051d5f',
    marginBottom: 10,
  },

  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    paddingTop: 7,
    fontSize: 16,
    fontWeight: '500',
    color: '#3C3C43',
    fontFamily: 'inter Neue',
  },
  bottomButton: {
    marginTop: windowHeight / 7,
    backgroundColor: '#F2F2F7',
    width: '100%',
    alignItems: 'center',
    height: 70,
    borderTopColor: '#D9D9D9',
  },
});
