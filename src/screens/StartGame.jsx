import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import InstructionText from '../components/game/InstructionText';

export default function StartGame({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleResetInput = () => {
    setEnteredNumber('');
  };

  const handleConfirmInput = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: handleResetInput,
          },
        ],
      );

      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={text => setEnteredNumber(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  input: {
    heigth: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
