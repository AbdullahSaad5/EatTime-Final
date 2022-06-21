import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import RecipeCard from '../../Components/UserComponents/RecipeCard';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

const Recipes = ({navigation}) => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    firestore()
      .collection('recipes')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });
        setData(data);
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search your favourite food"
        style={styles.searchbar}
      />
      <FlatList
        nestedScrollEnabled
        contentContainerStyle={{alignItems: 'center'}}
        data={Object.values(data)}
        renderItem={({item}) => (
          <RecipeCard
            data={item}
            onPress={() =>
              navigation.navigate('Browse', {
                data: item,
              })
            }
          />
        )}
        horizontal={false}
      />
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  searchbar: {
    marginTop: 17,
    marginHorizontal: 22,
    borderRadius: 19,
  },
});
