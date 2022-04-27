import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

import MovieList from '../../components/MoviesList';
import SearchHeader from '../../components/SearchHeader';

const MOVIES = [
  {
    id: '1',
    title: 'Itaewon Class',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview:
      "An ex-con opens a street bar in Itaewon, while also seeking revenge on the family who was responsible for his father's death. On the first day of attending his new high school, Park Sae Ro Yi punches his classmate Jang Geun Won, who was bullying another classmate. The bully is the son of CEO Jang Dae Hee.",
    rate: 5,
  },
  {
    id: '2',
    title: 'Startup',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview: 'something',
    rate: 5,
  },
  {
    id: '3',
    title: 'Vagabond',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview: 'something',
    rate: 5,
  },
];

type Movies = {
  id: string;
  title: string;
  poster: string;
  releaseDate: Date;
  overview: string;
  rate: number;
}[];

export default function SearchScreen() {
  //const {items, loading} = useItems();

  const [moviesFiltered, setMoviesFiltered] = useState<Movies>();
  const [notFound, setNotFound] = useState<boolean>(false);

  const handleSearch = (searchedText: string) => {
    const newMovies = MOVIES.filter(
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
        <MovieList movies={moviesFiltered || MOVIES} />
      ) : (
        <View style={styles.notFoundWrapper}>
          <Text style={styles.notFoundtext}>
            No se encontraron resultados. Prueba con otro término.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
