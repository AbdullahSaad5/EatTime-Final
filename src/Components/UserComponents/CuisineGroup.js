import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const CuisineGroup = ({
  Mainimg,
  Maintitle,
  MainCaption,
  subimg1,
  subTitle1,
  subCaption1,
  subimg2,
  subCaption2,
  subTitle2,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.MainView}>
        <TouchableOpacity style={styles.Mainitem} {...rest}>
          <ImageBackground
            source={Mainimg}
            style={styles.img}
            imageStyle={{borderRadius: 10}}
          />
          <View style={styles.textView}>
            <Text style={styles.imageText}>{Maintitle}</Text>
            <Text style={[styles.imageText, {fontSize: 14}]}>
              {MainCaption}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.SubView}>
        <TouchableOpacity style={styles.Subitem} {...rest}>
          <ImageBackground
            source={subimg1}
            style={styles.img}
            imageStyle={{borderRadius: 10}}
          />
          <View style={styles.textView}>
            <Text style={styles.imageText}>{subTitle1}</Text>
            <Text style={[styles.imageText, {fontSize: 14}]}>
              {subCaption1}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Subitem} {...rest}>
          <ImageBackground
            source={subimg2}
            style={styles.img}
            imageStyle={{borderRadius: 10}}
          />
          <View style={styles.textView}>
            <Text style={styles.imageText}>{subTitle2}</Text>
            <Text style={[styles.imageText, {fontSize: 14}]}>
              {subCaption2}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CuisineGroup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  SubView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  Mainitem: {
    width: 370,
    height: 172,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  Subitem: {
    width: 178,
    height: 172,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 90,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});
