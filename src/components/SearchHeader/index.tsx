import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

import SearchBar from '../SearchBar';

type SearchHeaderProps = {
  handleSearch?: (text: string) => void;
};

export default function SearchHeader({handleSearch}: SearchHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/icons/ic_back.png')} />
      </Pressable>
      <SearchBar style={styles.searchbar} handleSearch={handleSearch} focus />
    </View>
  );
}
