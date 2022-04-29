import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

import {Movie} from '../../interfaces/Movie';

import MovieList from '../../components/MoviesList';
import SearchHeader from '../../components/SearchHeader';
import {useMovieResults} from '../../hooks/useMovieResults';
import {SearchStackScreenProps} from '../../navigation/HomeStack.types';

export default function SearchScreen({route}: SearchStackScreenProps) {
  const {query} = route.params;

  const {movieResults, isMovieResultsLoading, movieResultsHasError} =
    useMovieResults({query});

  const [moviesFiltered, setMoviesFiltered] = useState<Movie[]>();
  const [notFound, setNotFound] = useState<boolean>(false);

  if (movieResultsHasError) {
    <Text>There's a problem with our servers. Try again later.</Text>;
    console.log(movieResultsHasError);
  }

  const handleSearch = (searchedText: string) => {
    const newMovies = movieResults.filter(movie =>
      movie.title.toLowerCase().includes(searchedText.toLowerCase()),
    );

    newMovies.length === 0 ? setNotFound(true) : setNotFound(false);

    setMoviesFiltered(newMovies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader handleSearch={handleSearch} query={query} />
      {!notFound ? (
        <MovieList
          movies={moviesFiltered || movieResults}
          loading={isMovieResultsLoading}
        />
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
