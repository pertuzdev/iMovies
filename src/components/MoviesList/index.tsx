import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {Movie} from '../../interfaces/Movie';

import {styles} from './styles';
import {textStyles} from '../../styles/theme';

import CardItem from '../CardItem';
import Loader from '../Loader';

export type MoviesListProps = {
  movies: Movie[];
  loading?: boolean;
};

export default function MoviesList({movies, loading}: MoviesListProps) {
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {movies.length === 0 ? (
        <View style={styles.noItems}>
          <Text style={[styles.placeholder, textStyles.placeholder]}>
            There are no movies
          </Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          ListFooterComponentStyle={{paddingBottom: 32}}
          renderItem={({item}) => (
            <CardItem
              key={item.id}
              id={item.id}
              title={item.title}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
              overview={item.overview}
              voteAverage={item.vote_average}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
}
