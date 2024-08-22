import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

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
        android_ripple={{color: '#680637'}}>
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
    backgroundColor: '#72063c',
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
