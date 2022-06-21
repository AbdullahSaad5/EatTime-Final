import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Searchbar} from 'react-native-paper';
import FoodCard from '../../Components/UserComponents/FoodCard';
import SlidingPanel from '../../Components/UserComponents/SlidingPanel';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';

const ShopScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [position, setPosition] = useState('-100%');

  const isFocused = useIsFocused();

  useEffect(() => {
    firestore()
      .collection('recipes')
      .where('availableToBuy', '==', 1)
      .get()
      .then(snapshot => {
        const newData = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(newData);
      });
  }, [isFocused]);

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search your favourite food"
          style={styles.searchbar}
        />
        <FlatList
          nestedScrollEnabled
          data={Object.values(data)}
          renderItem={({item}) => (
            <FoodCard
              data={item}
              onPress={() => {
                setCurrentData(item);
                setPosition(0);
              }}
            />
          )}
          numColumns={2}
        />
      </View>

      <SlidingPanel
        position={position}
        setPosition={setPosition}
        data={currentData}
      />
    </React.Fragment>
  );
};

export default ShopScreen;

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
