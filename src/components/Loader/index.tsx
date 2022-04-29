import React from 'react';
import {StyleSheet, View} from 'react-native';

import LottieView from 'lottie-react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animations/loader.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
