import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput, IconButton} from 'react-native-paper';

export default function IngredientInput({
  index,
  identifier,
  deleteIngredient,
  setIngredients,
  ingredients,
  data,
}) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('1g');

  useEffect(() => {
    if (data) {
      setName(data.name);
      setAmount(data.amount);
    }
  }, [data]);

  const handleFocus = () => {
    setAmount(amount.replace('g', ''));
  };

  const handleBlur = () => {
    if (amount.length === 0) {
      setAmount('1g');
    } else {
      setAmount(amount + 'g');
    }
  };

  return (
    <View style={styles.section}>
      <View style={styles.ingredientContainer}>
        <TextInput
          label={`Ingredient ${index + 1}`}
          value={name}
          onChangeText={setName}
          mode="outlined"
          outlineColor="#BCBCBC"
          activeOutlineColor="#007EFF"
          style={[styles.textInput, {textAlign: 'left'}]}
          onBlur={() => {
            if (name.length > 0) {
              const temp = [...ingredients];
              temp[index] = {
                name: name,
                amount: amount.replace('g', ''),
              };
              setIngredients(temp);
              console.log(temp);
            }
          }}
        />
      </View>
      <View style={styles.amountContainer}>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          mode="outlined"
          outlineColor="#BCBCBC"
          activeOutlineColor="#007EFF"
          style={styles.textInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      <IconButton
        icon="close"
        size={20}
        style={styles.deleteButton}
        onPress={() => {
          deleteIngredient(identifier);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  ingredientContainer: {
    flex: 2,
    paddingRight: 10,
  },
  amountContainer: {
    flex: 1,
  },
  textInput: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
