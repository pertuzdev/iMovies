import {useContext, useEffect} from 'react';
import {MovieContext} from '../context/Movie/MovieContext';

export function useMovies() {
  const {movieState, getPopularMoviesList} = useContext(MovieContext);

  const {movies, loading, error} = movieState;

  useEffect(() => {
    getPopularMoviesList();
  }, []);

  return {movies, loading, error};
}
