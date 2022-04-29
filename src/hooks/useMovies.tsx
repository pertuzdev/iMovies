import {useContext} from 'react';

import {MovieContext} from '../context/Movie/MovieContext';

export function useMovies() {
  const {movieState} = useContext(MovieContext);

  const {movies, loading, error} = movieState;

  return {movies, loading, error};
}
