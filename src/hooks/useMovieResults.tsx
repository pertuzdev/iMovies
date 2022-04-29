import {useReducer, useEffect} from 'react';

import {MovieState} from '../interfaces/Movie';

import {getMovieResults} from '../actions/MovieActions';

import movieResultsReducer from '../reducers/movieResultsReducer';

type Props = {
  query: string;
};

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export function useMovieResults({query}: Props) {
  const [resultsState, dispatch] = useReducer(
    movieResultsReducer,
    initialState,
  );

  useEffect(() => {
    getMovieResults({dispatch, query});
  }, [query]);

  const {
    movies: movieResults,
    loading: isMovieResultsLoading,
    error: movieResultsHasError,
  } = resultsState;

  return {movieResults, isMovieResultsLoading, movieResultsHasError};
}
