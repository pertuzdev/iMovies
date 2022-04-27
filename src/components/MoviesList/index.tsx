import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from './styles';
import {textStyles} from '../../styles/theme';

import CardItem from '../CardItem';

export type MoviesListProps = {
  movies: {
    id: string;
    title: string;
    poster: string;
    releaseDate: Date;
    overview: string;
    rate: number;
  }[];
  loading?: boolean;
};

export default function MoviesList({movies, loading}: MoviesListProps) {
  if (loading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <>
      {movies.length === 0 ? (
        <View style={styles.noItems}>
          <Text style={[styles.placeholder, textStyles.placeholder]}>
            No hay productos agregados
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
              imageURL={item.poster}
              releaseDate={item.releaseDate}
              overview={item.overview}
              rate={item.rate}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
}
