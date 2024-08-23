import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors';

export default function InstructionText({children, style}) {
  return <Text style={[styles.inputTitle, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  inputTitle: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
