import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';

export default function CounterWithText({value, setValue, heading}) {
  useEffect(() => {
    setValue(value);
  }, []);

  const handleShortPress = mode => {
    if (mode === 'add') {
      value >= 0 && (value < 5 ? setValue(value + 0.5) : setValue(value + 1));
    } else {
      value > 0 && (value <= 5 ? setValue(value - 0.5) : setValue(value - 1));
    }
  };

  const handleLongPress = mode => {
    if (mode === 'add') {
      value >= 0 && (value < 5 ? setValue(value + 0.5) : setValue(value + 5));
    } else {
      value > 0 && (value <= 5 ? setValue(value - 0.5) : setValue(value - 5));
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.text}>{heading}</Text>
      <View style={styles.counter}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleShortPress('subtract')}
          onLongPress={() => handleLongPress('subtract')}>
          <AntIcons name="minus" size={20} color="black" />
        </TouchableOpacity>
        <TextInput
          value={String(value) + ' mins'}
          style={styles.textInput}
          editable={false}
          onChangeText={setValue}
          keyboardType={'number-pad'}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleShortPress('add')}
          onLongPress={() => handleLongPress('add')}>
          <AntIcons name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>
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
  text: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
  },
  textInput: {
    width: 70,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  button: {
    padding: 10,
  },
});
