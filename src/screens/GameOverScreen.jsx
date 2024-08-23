import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({
  roundNumber,
  userNumber,
  onStartNewGame,
}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1724004546082-edaf801e3129?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
          }}
        />
      </View>

      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highlightText}>{roundNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: deviceHeight < 380 ? 150 : 300,
    width: deviceWidth < 380 ? 150 : 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    margin: 36,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontWeight: 'bold',
  },
});
