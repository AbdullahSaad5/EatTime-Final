import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import OctiIcons from 'react-native-vector-icons/Octicons';
import ControlsBar from '../../Components/AdminComponents/ControlsBar';
import ImagePicker from 'react-native-image-crop-picker';
import PopUp from '../../Components/AdminComponents/Popup';
import {useIsFocused} from '@react-navigation/native';

export default function AddRecipeTitle({navigation, route}) {
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState(null);
  const [visible, setVisible] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (route.params && route.params.mode == 'edit') {
      setTitle(route.params.item.title);
      setPicture(route.params.item.picture);
    }
  }, [route.params, isFocused]);

  const handlePicturePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setPicture(image.path);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleNext = () => {
    if (title === '' || picture === null) {
      setVisible(true);
    } else {
      if (route.params && route.params.mode == 'edit') {
        navigation.navigate('Add Recipe Info', {
          item: route.params.item,
          title: title,
          picture: picture,
        });
      } else {
        navigation.navigate('Add Recipe Info', {title, picture});
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Title</Text>
        <TextInput
          label="Recipe Title"
          value={title}
          onChangeText={text => setTitle(text)}
          mode="outlined"
          outlineColor="#BCBCBC"
          activeOutlineColor="#007EFF"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePicturePick}
          disabled={picture}>
          <View
            style={[
              styles.textContainer,
              {display: picture ? 'none' : 'flex'},
            ]}>
            <OctiIcons name="upload" size={30} color="black" />
            <Text style={styles.text}>Upload Recipe Picture</Text>
          </View>

          <View
            style={[
              styles.pictureContainer,
              {display: picture ? 'flex' : 'none'},
            ]}>
            <Image source={{uri: picture}} style={styles.image} />
            <TouchableOpacity
              style={styles.crossButton}
              onPress={() => {
                setPicture(null);
              }}>
              <OctiIcons name="x-circle-fill" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <ControlsBar
          backButtonDisabled={true}
          nextButtonText="Next"
          navigation={navigation}
          nextPageName="Add Recipe Info"
          onNext={handleNext}
        />
      </View>

      {/* Error popup */}
      <PopUp
        visible={visible}
        setVisible={setVisible}
        text="Please fill all the required data before proceeding."
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  heading: {
    fontSize: 40,
    color: '#000',
    fontWeight: '600',
    marginBottom: 10,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 25,
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
  },
  textContainer: {
    alignItems: 'center',
  },
  pictureContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  crossButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
