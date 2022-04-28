import {createContext} from 'react';
import {MovieState} from '../../interfaces/Movie';

export type MovieContextProps = {
  movieState: MovieState;
};

export const MovieContext = createContext<MovieContextProps>(
  {} as MovieContextProps,
);
