import React, {useReducer, useEffect} from 'react';

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

  useEffect(() => {
    console.log('useeffect');
    getPopularMovies({dispatch});
  }, []);

  return (
    <MovieContext.Provider value={{movieState}}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
