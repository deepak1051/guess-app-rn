import React, {useState} from 'react';
import {ImageBackground, StyleSheet, SafeAreaView} from 'react-native';
import StartGame from './src/screens/StartGame';

import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [useNumber, setUserNumber] = useState();

  const handleNumberPicked = pickedNumber => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGame onPickNumber={handleNumberPicked} />;
  if (useNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
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
