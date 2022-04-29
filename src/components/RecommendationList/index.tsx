import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from './styles';
import {textStyles} from '../../styles/theme';

import {Movie} from '../../interfaces/Movie';

import RecommendationItem from '../RecommendationItem';
import Loader from '../Loader';

export type MoviesListProps = {
  movies: Movie[];
  loading?: boolean;
};

export default function RecommendationList({movies, loading}: MoviesListProps) {
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
          horizontal={true}
          renderItem={({item}) => (
            <RecommendationItem
              key={item.id}
              id={item.id}
              title={item.title}
              posterPath={item.poster_path}
              voteAverage={item.vote_average}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  );
}
