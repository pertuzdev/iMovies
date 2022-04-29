import React, {useRef} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

import LottieView from 'lottie-react-native';

import {colors, textStyles} from '../../styles/theme';

type TextButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  disabled?: boolean;
  loading?: boolean;
};

export default function Button({
  label = 'label',
  style,
  onPress,
  disabled = false,
  backgroundColor = '',
  loading = false,
}: TextButtonProps) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  if (disabled) {
    Animated.timing(fadeAnim, {
      toValue: 0.7,
      duration: 200,
      useNativeDriver: true,
    }).start();
  } else {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

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

  if (loading) {
    return (
      <LottieView
        source={require('../../assets/animations/loader.json')}
        autoPlay
        loop
        style={styles().loader}
      />
    );
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      disabled={disabled}>
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
    loader: {
      width: 60,
      height: 60,
    },
  });
