import {StyleSheet, View} from 'react-native';
import Title from '../components/Title';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <View>{/* <Text>Higher or lower</Text>+ - */}</View>

      {/* <View>LOG ROUNDES</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
