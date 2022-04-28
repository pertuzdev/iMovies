import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useMovies} from '../../hooks/useMovies';

import {styles} from './styles';

import {Movie} from '../../interfaces/Movie';

import MovieList from '../../components/MoviesList';
import SearchHeader from '../../components/SearchHeader';

export default function SearchScreen() {
  const {movies, loading} = useMovies();

  const [moviesFiltered, setMoviesFiltered] = useState<Movie[]>();
  const [notFound, setNotFound] = useState<boolean>(false);

  const handleSearch = (searchedText: string) => {
    const newMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().includes(searchedText.toLowerCase()) ||
        movie.overview.toLowerCase().includes(searchedText.toLowerCase()),
    );

    newMovies.length === 0 ? setNotFound(true) : setNotFound(false);

    setMoviesFiltered(newMovies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader handleSearch={handleSearch} />
      {!notFound ? (
        <MovieList movies={moviesFiltered || movies} loading={loading} />
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
