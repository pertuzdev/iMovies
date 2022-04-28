import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HomeStackScreenProps} from '../../navigation/HomeStack.types';

import {useMovies} from '../../hooks/useMovies';

import {styles} from './styles';

import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

export default function HomeScreen({navigation}: HomeStackScreenProps) {
  const {movies, loading} = useMovies();

  const handleSearchBarPress = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} onSearchBarPress={handleSearchBarPress} />

      <View style={styles.content}>
        <MoviesList movies={movies} loading={loading} />
      </View>
    </SafeAreaView>
  );
}
