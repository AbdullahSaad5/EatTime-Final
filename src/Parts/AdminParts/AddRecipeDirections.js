import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import React, {useState} from 'react';
import ControlsBar from '../../Components/AdminComponents/ControlsBar';
import DirectionsInput from '../../Components/AdminComponents/DirectionsInput';
import PopUp from '../../Components/AdminComponents/Popup';

export default function AddRecipeDirections({navigation, route}) {
  const [directions, setDirections] = useState([]);
  const [directionsComponent, setDirectionsComponent] = useState([
    <DirectionsInput key={Math.random()} />,
  ]);
  const [visible, setVisible] = useState(false);

  const addDirection = () => {
    setDirectionsComponent([
      ...directionsComponent,
      <DirectionsInput key={Math.random()} />,
    ]);
  };

  const deleteDirection = key => {
    const temp = directionsComponent.filter(item => item.key !== key);
    setDirectionsComponent([...temp]);
  };

  const handleNext = () => {
    if (directions.length === 0) {
      setVisible(true);
    } else {
      navigation.navigate('Add Additional Info', {
        title: route.params.title,
        picture: route.params.picture,
        prepTime: route.params.prepTime,
        cookTime: route.params.cookTime,
        difficulty: route.params.difficulty,
        ingredients: route.params.ingredients,
        directions,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Directions</Text>
        <ScrollView style={styles.scrollContainer}>
          {directionsComponent.map((e, i) => (
            <DirectionsInput
              deleteDirection={deleteDirection}
              key={e.key}
              index={i}
              identifier={e.key}
              directions={directions}
              setDirections={setDirections}
            />
          ))}
          <Button
            icon="plus"
            mode="contained"
            color="#007EFF"
            style={styles.addButton}
            labelStyle={styles.addButtonText}
            uppercase={false}
            onPress={addDirection}>
            Add Direction
          </Button>
        </ScrollView>
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
        text="Please add at least one direction."
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
  scrollContainer: {
    marginBottom: 150,
  },
  addButton: {
    marginTop: 25,
    width: '100%',
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
});
