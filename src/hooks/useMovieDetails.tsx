import {useReducer} from 'react';
import {useEffect} from 'react';

import {MovieDetailState} from '../interfaces/Movie';

import {getMovieDetails} from '../actions/MovieActions';
import movieDetailReducer from '../reducers/movieDetailReducer';

import {useMovies} from './useMovies';

type Props = {
  id: number;
};

export function useMovieDetails({id}: Props) {
  const {movies} = useMovies();
  const movieSummary = movies.find(movie => movie.id === id);

  const initialState: MovieDetailState = {
    movie: movieSummary,
    loading: false,
    error: null,
  };

  const [movieState, dispatch] = useReducer(movieDetailReducer, initialState);

  useEffect(() => {
    if (!movieState.movie) {
      getMovieDetails({dispatch, id});
    }
  }, [id, movieState.movie]);

  const {movie: movieDetail, loading, error} = movieState;

  return {movieDetail, loading, error};
}
