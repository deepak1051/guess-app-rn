import React, {useState} from 'react';
import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGame from './src/screens/StartGame';

import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screens/GameScreen';
import Colors from './src/constants/colors';
import GameOverScreen from './src/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const handleGameOver = rounds => {
    setGameIsOver(true);

    setGuessRounds(rounds);
  };

  const handleNumberPicked = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const handleStartNewGame = () => {
    setUserNumber(null);

    setGuessRounds(0);
  };
  let screen = <StartGame onPickNumber={handleNumberPicked} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={['#4e0329', Colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
