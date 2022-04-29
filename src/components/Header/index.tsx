import React from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';

import {styles} from './styles';
import {colors, textStyles} from '../../styles/theme';

import SearchBar from '../SearchBar';
import Button from '../Button';
import {useUser} from '../../hooks/useUser';

type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  handleSearch?: (text: string) => void;
};

export default function Header({style = {}, handleSearch}: HeaderProps) {
  const src = require('../../assets/images/logo.png');

  const {logout} = useUser();

  const handleLogout = () => {
    logout();
  };

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
          <Button
            label="Logout"
            backgroundColor={colors.red}
            onPress={handleLogout}
          />
        </View>
      </View>
      <SearchBar style={styles.searchBar} handleSearch={handleSearch} />
    </View>
  );
}
