import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown({setDifficulty, difficulty}) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Easy', value: 'Easy'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Hard', value: 'Hard'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Difficulty</Text>
      <View>
        <DropDownPicker
          style={styles.dropdown}
          open={open}
          value={difficulty}
          items={items}
          placeholder="Select difficulty"
          setOpen={setOpen}
          setValue={setDifficulty}
          setItems={setItems}
          containerProps={{
            width: 170,
          }}
          listItemContainerStyle={{
            backgroundColor: '#EFEFEF',
          }}
          listItemLabelStyle={{
            fontSize: 18,
            color: '#000',
          }}
          textStyle={{
            fontSize: 18,
            color: '#000',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
  },
  dropdown: {
    backgroundColor: '#EFEFEF',
  },
});
