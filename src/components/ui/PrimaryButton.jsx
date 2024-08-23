import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

export default function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.85,
    backgroundColor: 'pink',
  },
});
