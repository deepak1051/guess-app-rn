import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Colors from '../../constants/colors';
export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
console.log(deviceWidth);
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 280 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
