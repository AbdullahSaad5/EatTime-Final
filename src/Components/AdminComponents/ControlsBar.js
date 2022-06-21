import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function ControlsBar({
  backButtonDisabled,
  nextButtonText,
  navigation,
  onNext,
}) {
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        style={styles.backControl}
        disabled={backButtonDisabled}
        onPress={() => {
          navigation.goBack();
        }}>
        <EntypoIcons
          name="chevron-small-left"
          size={30}
          color={backButtonDisabled ? '#BCBCBC' : 'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextControl} onPress={onNext}>
        <Text style={styles.controlText}>{nextButtonText}</Text>
        <EntypoIcons name="chevron-small-right" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  backControl: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#e2e3e4',
  },
  nextControl: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 15,
    backgroundColor: '#007EFF',
  },
  controlText: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 3,
  },
});
