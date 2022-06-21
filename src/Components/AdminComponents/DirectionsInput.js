import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TextInput, IconButton} from 'react-native-paper';

export default function DirectionsInput({
  index,
  identifier,
  deleteDirection,
  setDirections,
  directions,
}) {
  const [direction, setDirection] = useState('');

  return (
    <View style={styles.section}>
      <View style={styles.ingredientContainer}>
        <TextInput
          label={`Direction ${index + 1}`}
          value={direction}
          onChangeText={setDirection}
          mode="outlined"
          outlineColor="#BCBCBC"
          activeOutlineColor="#007EFF"
          style={[styles.textInput, {textAlign: 'left'}]}
          onBlur={() => {
            if (direction.length > 0) {
              const temp = [...directions];
              temp[index] = direction;
              setDirections(temp);
            }
          }}
        />
      </View>
      <IconButton
        icon="close"
        size={20}
        style={styles.deleteButton}
        onPress={() => {
          deleteDirection(identifier);
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
  },
  textInput: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  deleteButton: {},
});
