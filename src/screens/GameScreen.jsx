import {Alert, StyleSheet, Text, View} from 'react-native';

import {useEffect, useState} from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import InstructionText from '../components/game/InstructionText';
import Card from '../components/ui/Card';

import AntDesign from 'react-native-vector-icons/AntDesign';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      console.log(guessRounds);
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const handleNextGuess = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie!', 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds(prev => [newRndNumber, ...prev]);
  };

  const length = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess('lower')}>
              -
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess('higher')}>
              {/* <AntDesign name="minus" size={24} />  */}+
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>
        {guessRounds.map((guess, index) => (
          <GuessLogItem guess={guess} roundNumber={index + 1} key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
  instructionText: {
    marginBottom: 15,
  },

  buttonContainer: {
    flex: 1,
  },
});
