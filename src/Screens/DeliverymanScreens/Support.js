import React from 'react';

import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Support = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          borderBottomColor: '#e6e6e6',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('My Home')}>
          <EntypoIcon name="chevron-left" size={25} color="black" />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '600',
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <Text style={styles.text1}>How can we help?</Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={require('../../Assets/Icons/hamburger.png')} />
        </TouchableOpacity>
      </View>
      <Image
        style={{
          width: '100%',
          height: '30%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 7,
          marginBottom: 5,
        }}
        source={require('../../Assets/SVG/IT-Support.png')}
      />

      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={{height: 800}}>
          <Text
            style={{
              color: '#1C1C1C',
              fontSize: 22,
              fontFamily: 'Inter',
              marginLeft: 15,
              textAlign: 'left',
              marginBottom: 10,
            }}>
            Quick Help
          </Text>

          <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>
          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Temporary Block your account</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Change Reciever Information</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Update CNIC Expiry Date</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#1C1C1C',
              fontSize: 22,
              fontFamily: 'Inter',
              marginLeft: 15,
              textAlign: 'left',
              marginTop: 10,
              marginBottom: 15,
            }}>
            Track or Register Complaint
          </Text>

          <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Track your Complaint</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Track Your Debit Card </Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Edit Personal Information</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: '#1C1C1C',
              fontSize: 22,
              fontFamily: 'Inter',
              marginLeft: 15,
              textAlign: 'left',
              // marginBottom:10,
            }}>
            More....
          </Text>

          <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>
          <TouchableOpacity style={styles.Subitem}>
            <View style={styles.subSub}>
              <Text style={styles.text}>Frequently Asked Questions</Text>
            </View>
            <AntDesign
              name="right"
              size={15}
              color="grey"
              style={styles.right}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Support;

const styles = StyleSheet.create({
  top: {
    marginTop: 15,
    marginLeft: 20,
  },

  text1: {
    color: '#1C1C1C',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#1C1C1E',
    marginLeft: -3,
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

  section: {
    marginTop: 11,
    width: '100%',
    paddingLeft: '5%',
    backgroundColor: '#fff',
  },
  Subitem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    width: '100%',
    paddingLeft: '5%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
