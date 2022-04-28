import React, {useEffect} from 'react';
import {View, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStack';

import {styles} from './styles';

import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

import {useMovies} from '../../hooks/useMovies';

type HomeScreenProps = StackScreenProps<HomeStackParamList, 'Home'>;

export default function HomeScreen({navigation}: HomeScreenProps) {
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
