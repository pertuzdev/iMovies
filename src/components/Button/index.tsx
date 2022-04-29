import React, {useRef} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {colors, textStyles} from '../../styles/theme';

type TextButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
};

export default function Button({
  label = 'label',
  style,
  onPress,
  backgroundColor = '',
}: TextButtonProps) {
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
      <Animated.View
        style={[styles(backgroundColor).container, style, {opacity: fadeAnim}]}>
        <Text style={[styles().btnText, textStyles.buttonTxt]}>{label}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: 12,
      paddingHorizontal: 12,
      backgroundColor: backgroundColor || colors.primaryBlue,
      borderRadius: 10,
    },
    btnText: {
      textAlign: 'center',
      color: 'white',
    },
  });
