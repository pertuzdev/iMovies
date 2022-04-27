import React from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';

import {styles} from './styles';
import {textStyles} from '../../styles/theme';

import SearchBar from '../SearchBar';
import Button from '../Button';

type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  onSearchBarPress: () => void;
};

export default function Header({style = {}, onSearchBarPress}: HeaderProps) {
  const src = require('../../assets/images/logo.png');
  return (
    <View style={[styles.container, style]}>
      <View style={styles.wrapper}>
        <View style={styles.profileWrapper}>
          <View style={styles.imgCont}>
            <Image source={src} style={styles.img} />
          </View>
          <View style={styles.txtWrapper}>
            <Text style={textStyles.title}>iMovies</Text>
            <Text style={textStyles.cardDescription}>Perfil</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button label="Salir" />
        </View>
      </View>
      <SearchBar style={styles.searchBar} onPress={onSearchBarPress} />
    </View>
  );
}
