import { StyleSheet, Text,TextInput, View, Image, ImageBackground, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import React from 'react'
import { Avatar, Button, Card, Title, Paragraph, RadioButton } from 'react-native-paper';



function feedback(){
  const [wonderful,setwonderful]=React.useState('');
  const [delivery,setdelivery]=React.useState('');
 const [checked, setChecked] = React.useState('');
  return(
    
  <View style={{marginTop:44,}}>
  <Text style={{
    color: '#333',
      fontFamily: 'Roboto-Medium',
      fontSize: 25,
      color:'grey',
      fontWeight: 'bold',
      marginLeft:9}}
      >Add your feedback</Text>
  
  <Card.Content style={{
     marginTop: 15,
    borderColor: "black",
    borderRadius: 7,
    width: '95%',
    height: '14%',
    marginLeft: 9,
 
    
    shadowColor: "black"
   ,backgroundColor:'#ccc'
  }} >
  
    <Text style={{
      color: '#333',
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft:-4,
      marginTop: 10,
  
  
    }}>Thank you for taking part</Text>
  
      
      <Text 
      style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 14,
   }}> 
      Please complete this document to help us improve future recipes and delivery
      </Text>
   
  </Card.Content>
 
  <View>
      <Text
        style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,
      marginTop: 20,
      marginLeft: 9,
   }}>1. Was the recipe mentioned created a wonderful dish?</Text>
      <TextInput
      style={{height:90,borderRadius:7,marginVertical:12,marginHorizontal:9,borderWidth:1,borderColor:'grey'}}
      multiline={true}
      numberOfLines={10}
      onChangeText={setwonderful}
      value={wonderful}/>
  </View>
  <View>
      <Text
       style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,
      marginTop: 10,
      marginLeft: 9,
   }}>2. How's our delivery system? did they delivered on time?</Text>
      <TextInput     style={{height:90,borderRadius:7,marginVertical:12,marginHorizontal:9,borderWidth:1,borderColor:'grey'}}
      multiline={true}
      numberOfLines={10}
      onChangeText={setdelivery}
      value={delivery}/>
  </View>
  
  <View>
      <Text  style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,
      marginTop: 10,
      marginLeft: 9,
   }}>3. Does procedure for recipe mentioned in detail?</Text>
      <Text 
       style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 12,
      marginLeft: 9,
      marginTop: 5,
   }}>1= Strongly Agree, 4= Strongly Disagree</Text>
    
     <ScrollView
     >
     <View style={{flexDirection:'row',marginLeft: 9,}}>
      <TouchableOpacity
      style={{borderWidth:1,borderRadius:5,width:70,marginVertical:5,alignContent:'center',marginHorizontal:5,borderColor:'grey'}}>
      <Text 
        style={{marginVertical:3,alignContent:'center',justifyContent:'center', marginLeft: 28,
        borderColor:'grey'}}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth:1,borderRadius:5,width:70,marginVertical:5,alignContent:'center',marginHorizontal:5,
        borderColor:'grey'}}>
      <Text 
        style={{marginVertical:3,alignContent:'center',justifyContent:'center', marginLeft: 28,}}>2</Text>
       </TouchableOpacity>
      <TouchableOpacity  style={{borderWidth:1,borderRadius:5,width:70,marginVertical:5,alignContent:'center',marginHorizontal:5,borderColor:'grey'}}>
      <Text 
        style={{marginVertical:3,alignContent:'center',justifyContent:'center', marginLeft: 28,}}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{borderWidth:1,borderRadius:5,width:70,marginVertical:5,alignContent:'center',marginHorizontal:5,borderColor:'grey'}}>
      <Text 
        style={{marginVertical:3,alignContent:'center',justifyContent:'center', marginLeft: 28,}}>4</Text>
      </TouchableOpacity>
    
      </View>
      </ScrollView>
  </View>
  <View>
      <Text
       style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,
      marginTop: 10,
      marginLeft: 9,
   }}>4. How's quality of food?</Text>
     <View style={{flexDirection:'row',marginLeft: 9,alignItems:'center'}}>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text
       style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,}}
      >Bad</Text>
      </View>
       <View style={{flexDirection:'row',marginLeft: 9,alignItems:'center'}}>
      <RadioButton
        value="Second"
        status={ checked === 'Second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Second')}
      />
      <Text
       style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,}}
      >Good</Text>
      </View>
        <View style={{flexDirection:'row',marginLeft: 9,alignItems:'center'}}>
      <RadioButton
        value="Third"
        status={ checked === 'Third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Third')}
      />
      <Text
       style={{ color: '#333', 
      fontFamily: 'Roboto-Regular', 
      fontWeight: 'bold', 
      fontSize: 15,}}
      >Excellent</Text>
      </View>
    </View>
  
  
  
  </View>
  );
  }
export default feedback;