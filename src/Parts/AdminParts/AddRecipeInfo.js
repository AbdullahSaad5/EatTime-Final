import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CounterWithText from '../../Components/AdminComponents/CounterWithText';
import Dropdown from '../../Components/AdminComponents/Dropdown';
import ControlsBar from '../../Components/AdminComponents/ControlsBar';
import PopUp from '../../Components/AdminComponents/Popup';
import {useIsFocused} from '@react-navigation/native';

export default function AddRecipeInfo({navigation, route}) {
  const [prepTime, setPrepTime] = useState(20);
  const [cookTime, setCookTime] = useState(20);
  const [difficulty, setDifficulty] = useState(null);
  const [visible, setVisible] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    const item = route.params.item;
    if (item) {
      setPrepTime(item.prepTime);
      setCookTime(item.cookTime);
      setDifficulty(item.difficulty);
    }
  }, [route.params, isFocused]);

  const handleNext = () => {
    if (prepTime === 0 || cookTime === 0 || difficulty === null) {
      setVisible(true);
    } else {
      if (route.params.item) {
        navigation.navigate('Add Recipe Ingredients', {
          item: route.params.item,
          title: route.params.title,
          picture: route.params.picture,
          prepTime,
          cookTime,
          difficulty,
        });
      } else {
        navigation.navigate('Add Recipe Ingredients', {
          title: route.params.title,
          picture: route.params.picture,
          prepTime,
          cookTime,
          difficulty,
        });
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Information</Text>
        <CounterWithText
          heading="Preparation Time"
          value={prepTime}
          setValue={setPrepTime}
        />
        <CounterWithText
          heading="Cooking Time"
          value={cookTime}
          setValue={setCookTime}
        />
        <Dropdown setDifficulty={setDifficulty} difficulty={difficulty} />

        <ControlsBar
          backButtonDisabled={false}
          nextButtonText="Next"
          navigation={navigation}
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
});
