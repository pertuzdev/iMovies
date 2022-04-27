import React, {useRef} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  GestureResponderEvent,
} from 'react-native';

import {colors, textStyles} from '../../styles/theme';

type TextButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function Button({label = 'label', onPress}: TextButtonProps) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.3,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}>
      <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
        <Text style={[styles.btnText, textStyles.buttonTxt]}>{label}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.red,
    borderRadius: 15,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
});
