import React, {useReducer} from 'react';

import {MovieState} from '../../interfaces/Movie';

import {getPopularMovies} from '../../actions/MovieActions';
import popularMoviesReducer from '../../reducers/movieReducer';
import {MovieContext} from './MovieContext';

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

type MovieProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export function MovieProvider({children}: MovieProviderProps) {
  const [movieState, dispatch] = useReducer(popularMoviesReducer, initialState);

  const getPopularMoviesList = () => {
    getPopularMovies({dispatch});
  };

  return (
    <MovieContext.Provider value={{movieState, getPopularMoviesList}}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
