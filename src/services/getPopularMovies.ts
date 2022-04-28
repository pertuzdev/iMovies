import {MovieListAPIResponse} from '../interfaces/Movie';
import {movieAPI} from './movieAPI';

export const getPopularMovies = async () => {
  return movieAPI
    .get<MovieListAPIResponse>('/popular')
    .then(res => res.data.results);
};
