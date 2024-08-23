import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors';
export default function Card({children}) {
  return <View style={styles.inputContainer}>{children}</View>;
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
