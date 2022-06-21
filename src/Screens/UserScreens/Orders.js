import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import CuisineGroup from '../../Components/UserComponents/CuisineGroup';

const data = [
  {
    Mainimg: require('../../Assets/Images/food.jpg'),
    Maintitle: 'Recipe Guide',
    MainCaption: '100 Brands',
    subimg1: require('../../Assets/Images/food.jpg'),
    subTitle1: 'Recipe Guide',
    subCaption1: '100 Brands',
    subimg2: require('../../Assets/Images/food.jpg'),
    subCaption2: '100 Brands',
    subTitle2: 'Recipe Guide',
  },
  {
    Mainimg: require('../../Assets/Images/recipe.jpg'),
    Maintitle: 'Recipe Guide',
    MainCaption: '100 Brands',
    subimg1: require('../../Assets/Images/recipe.jpg'),
    subTitle1: 'Recipe Guide',
    subCaption1: '100 Brands',
    subimg2: require('../../Assets/Images/recipe.jpg'),
    subCaption2: '100 Brands',
    subTitle2: 'Recipe Guide',
  },
  {
    Mainimg: require('../../Assets/Images/food.jpg'),
    Maintitle: 'Recipe Guide',
    MainCaption: '100 Brands',
    subimg1: require('../../Assets/Images/food.jpg'),
    subTitle1: 'Recipe Guide',
    subCaption1: '100 Brands',
    subimg2: require('../../Assets/Images/recipe.jpg'),
    subCaption2: '100 Brands',
    subTitle2: 'Recipe Guide',
  },
  {
    Mainimg: require('../../Assets/Images/food.jpg'),
    Maintitle: 'Recipe Guide',
    MainCaption: '100 Brands',
    subimg1: require('../../Assets/Images/food.jpg'),
    subTitle1: 'Recipe Guide',
    subCaption1: '100 Brands',
    subimg2: require('../../Assets/Images/recipe.jpg'),
    subCaption2: '100 Brands',
    subTitle2: 'Recipe Guide',
  },
  {
    Mainimg: require('../../Assets/Images/food.jpg'),
    Maintitle: 'Recipe Guide',
    MainCaption: '100 Brands',
    subimg1: require('../../Assets/Images/food.jpg'),
    subTitle1: 'Recipe Guide',
    subCaption1: '100 Brands',
    subimg2: require('../../Assets/Images/recipe.jpg'),
    subCaption2: '100 Brands',
    subTitle2: 'Recipe Guide',
  },
];

const Orders = ({navigation}) => {
  return (
    //     <View>
    //       <ScrollView>
    //         <View>
    //           {data.map((item, index) => {
    //             return (
    //               <View style={styles.container}>
    //                 <View style={styles.MainView}>
    //                   <TouchableOpacity style={styles.Mainitem}>
    //                     <ImageBackground
    //                       source={item.Mainimg}
    //                       style={styles.img}
    //                       imageStyle={{borderRadius: 10}}
    //                     />
    //                     <View style={styles.textView}>
    //                       <Text style={styles.imageText}>{item.Maintitle}</Text>
    //                       <Text style={[styles.imageText, {fontSize: 14}]}>
    //                         {item.MainCaption}
    //                       </Text>
    //                     </View>
    //                   </TouchableOpacity>
    //                 </View>
    //                 <View style={styles.SubView}>
    //                   <TouchableOpacity style={styles.Subitem}>
    //                     <ImageBackground
    //                       source={item.subimg1}
    //                       style={styles.img}
    //                       imageStyle={{borderRadius: 10}}
    //                     />
    //                     <View style={styles.textView}>
    //                       <Text style={styles.imageText}>{item.subTitle1}</Text>
    //                       <Text style={[styles.imageText, {fontSize: 14}]}>
    //                         {item.subCaption1}
    //                       </Text>
    //                     </View>
    //                   </TouchableOpacity>
    //                   <TouchableOpacity style={styles.Subitem}>
    //                     <ImageBackground
    //                       source={item.subimg2}
    //                       style={styles.img}
    //                       imageStyle={{borderRadius: 10}}
    //                     />
    //                     <View style={styles.textView}>
    //                       <Text style={styles.imageText}>{item.subTitle2}</Text>
    //                       <Text style={[styles.imageText, {fontSize: 14}]}>
    //                         {item.subCaption2}
    //                       </Text>
    //                     </View>
    //                   </TouchableOpacity>
    //                 </View>
    //               </View>
    //             );
    //           })}
    //         </View>
    //       </ScrollView>
    //     </View>
    //   );
    // };

    <View>
      <ScrollView>
        <View>
          {data.map((item, index) => {
            return (
              <CuisineGroup
                Mainimg={item.Mainimg}
                Maintitle={item.Maintitle}
                MainCaption={item.MainCaption}
                subimg1={item.subimg1}
                subTitle1={item.subTitle1}
                subCaption1={item.subCaption1}
                subimg2={item.subimg2}
                subCaption2={item.subCaption2}
                subTitle2={item.subTitle2}
                key={index}
                onPress={() => navigation.navigate('Shop')}
              />
            );
          })}
        </View>
      </ScrollView>
      {/* 
      <FlatList
        nestedScrollEnabled
        data={Object.values(data)}
        renderItem={({item}) => (
          <CuisineGroup
            Mainimg={item.Mainimg}
            Maintitle={item.Maintitle}
            MainCaption={item.MainCaption}
            subimg1={item.subimg1}
            subTitle1={item.subTitle1}
            subCaption1={item.subCaption1}
            subimg2={item.subimg2}
            subCaption2={item.subCaption2}
            subTitle2={item.subTitle2}
            onPress={() => navigation.navigate('Cart')}
          />
        // )}
      /> */}
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
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
