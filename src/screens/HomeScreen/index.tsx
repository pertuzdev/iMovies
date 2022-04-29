import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HomeStackScreenProps} from '../../navigation/HomeStack.types';

import {useMovies} from '../../hooks/useMovies';

import {styles} from './styles';

import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';
import SearchHeader from '../../components/SearchHeader';
import {useState} from 'react';
import {Movie} from '../../interfaces/Movie';

export default function HomeScreen({navigation}: HomeStackScreenProps) {
  const {movies, loading} = useMovies();

  /* const handleSearchBarPress = () => {
    navigation.navigate('Search');
  }; */

  const [moviesFiltered, setMoviesFiltered] = useState<Movie[]>();
  const [notFound, setNotFound] = useState<boolean>(false);

  const handleSearch = (searchedText: string) => {
    const newMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchedText.toLowerCase()),
    );

    newMovies.length === 0 ? setNotFound(true) : setNotFound(false);

    setMoviesFiltered(newMovies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} handleSearch={handleSearch} />
      {!notFound ? (
        <View style={styles.content}>
          <MoviesList movies={moviesFiltered || movies} loading={loading} />
        </View>
      ) : (
        <View style={styles.notFoundWrapper}>
          <Text style={styles.notFoundtext}>
            Your search did not match any movies in our database
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
