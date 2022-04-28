import {MovieAPIResponse} from '../interfaces/Movie';
import {movieAPI} from './movieAPI';

export const getPopularMovies = async () => {
  return movieAPI
    .get<MovieAPIResponse>('/popular')
    .then(res => res.data.results);
};
