import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

type ErrorMessage = {
  errorMessage: string;
};

const ErrorMessage = ({errorMessage}: ErrorMessage) => {
  if (errorMessage) {
    return <Text style={styles.errorTxt}>{`Error: ${errorMessage}`}</Text>;
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  errorTxt: {
    fontSize: 18,
    color: colors.red,
    marginLeft: 8,
    marginTop: 16,
  },
});

export default ErrorMessage;
