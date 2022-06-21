import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import React, {useState, useEffect} from 'react';
import ControlsBar from '../../Components/AdminComponents/ControlsBar';
import IngredientInput from '../../Components/AdminComponents/IngredientInput';
import PopUp from '../../Components/AdminComponents/Popup';
import {useIsFocused} from '@react-navigation/native';

export default function AddRecipeIngredients({navigation, route}) {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsComponent, setIngredientsComponent] = useState([
    <IngredientInput key={Math.random()} />,
  ]);
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    const item = route.params.item;
    if (item) {
      setIngredients(item.ingredients);
      ingredients.forEach((ingredient, index) => {
        addIngredient(ingredient);
      });
      setEdit(true);
    }
  }, [route.params, isFocused]);

  const addIngredient = data => {
    setIngredientsComponent([
      ...ingredientsComponent,
      <IngredientInput key={Math.random()} data={data} />,
    ]);
  };

  const deleteIngredient = key => {
    const temp = ingredientsComponent.filter(item => item.key !== key);
    setIngredientsComponent([...temp]);
  };

  const handleNext = () => {
    if (ingredients.length === 0) {
      setVisible(true);
    } else {
      navigation.navigate('Add Recipe Directions', {
        title: route.params.title,
        picture: route.params.picture,
        prepTime: route.params.prepTime,
        cookTime: route.params.cookTime,
        difficulty: route.params.difficulty,
        ingredients,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Ingredients</Text>
        <ScrollView style={styles.scrollContainer}>
          {edit
            ? ingredients.map((ingredient, index) => {
                return (
                  <IngredientInput
                    key={index}
                    identifier={index}
                    index={index}
                    data={ingredient}
                    deleteIngredient={deleteIngredient}
                    setIngredients={setIngredients}
                  />
                );
              })
            : ingredientsComponent.map((e, i) => (
                <IngredientInput
                  deleteIngredient={deleteIngredient}
                  key={e.key}
                  index={i}
                  identifier={e.key}
                  setIngredients={setIngredients}
                  ingredients={ingredients}
                />
              ))}
          <Button
            icon="plus"
            mode="contained"
            color="#007EFF"
            style={styles.addButton}
            labelStyle={styles.addButtonText}
            uppercase={false}
            onPress={addIngredient}>
            Add Ingredient
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
        text="Please add at least one ingredient."
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
