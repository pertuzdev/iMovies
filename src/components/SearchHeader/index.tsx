import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';

import SearchBar from '../SearchBar';

type SearchHeaderProps = {
  handleSearch?: (text: string) => void;
  query?: string;
};

export default function SearchHeader({handleSearch, query}: SearchHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <Pressable
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/ic_back.png')} />
        </Pressable>
        <Text style={styles.textWrapper}>{`Results of ${query}`}</Text>
      </View>
      <SearchBar
        style={styles.searchbar}
        handleSearch={handleSearch}
        defaultValue={query}
        focus
      />
    </View>
  );
}
