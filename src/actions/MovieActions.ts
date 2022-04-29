import {movieAPI} from '../services/movieAPI';

import {MovieFull, MovieListAPIResponse} from '../interfaces/Movie';

import {MovieActionType} from '../reducers/popularMovieReducer';
import {MovieRecommendationActionType} from '../reducers/movieRecommendationReducer';
import {MovieDetailActionType} from '../reducers/movieDetailReducer';
import {MovieResultsType} from '../reducers/movieResultsReducer';
import {searchMovies} from '../services/searchMovies';

type GetPopularMoviesProps = {
  dispatch: React.Dispatch<MovieActionType>;
};

type GetRecommendationsProps = {
  dispatch: React.Dispatch<MovieRecommendationActionType>;
  id: number;
};

type GetMovieDetailsProps = {
  dispatch: React.Dispatch<MovieDetailActionType>;
  id: number;
};

type GetMovieResults = {
  dispatch: React.Dispatch<MovieResultsType>;
  query: string;
};

export const getPopularMovies = async ({dispatch}: GetPopularMoviesProps) => {
  dispatch({type: 'FETCH_MOVIES_REQUEST', payload: {loading: true}});
  movieAPI
    .get<MovieListAPIResponse>('/popular')
    .then(res => {
      dispatch({
        type: 'FETCH_MOVIES_SUCCESS',
        payload: {loading: false, movies: res.data.results},
      });
    })
    .catch(e => {
      dispatch({
        type: 'FETCH_MOVIES_FAIL',
        payload: {loading: false, error: e},
      });
    });
};

export const getRecommendations = async ({
  dispatch,
  id,
}: GetRecommendationsProps) => {
  dispatch({type: 'FETCH_RECOMMENDATIONS_REQUEST', payload: {loading: true}});
  movieAPI
    .get<MovieListAPIResponse>(`${id}/similar`)
    .then(res => {
      dispatch({
        type: 'FETCH_RECOMMENDATIONS_SUCCESS',
        payload: {loading: false, movies: res.data.results},
      });
    })
    .catch(e => {
      dispatch({
        type: 'FETCH_RECOMMENDATIONS_FAIL',
        payload: {loading: false, error: e},
      });
    });
};

export const getMovieDetails = async ({dispatch, id}: GetMovieDetailsProps) => {
  dispatch({type: 'FETCH_DETAILS_REQUEST', payload: {loading: true}});
  movieAPI
    .get<MovieFull>(`${id}`)
    .then(res => {
      dispatch({
        type: 'FETCH_DETAILS_SUCCESS',
        payload: {loading: false, movie: res.data},
      });
    })
    .catch(e => {
      dispatch({
        type: 'FETCH_DETAILS_FAIL',
        payload: {loading: false, error: e},
      });
    });
};

export const getMovieResults = async ({dispatch, query}: GetMovieResults) => {
  dispatch({type: 'FETCH_RESULTS_REQUEST', payload: {loading: true}});
  searchMovies
    .get<MovieListAPIResponse>(`/movie?query=${query}`)
    .then(res => {
      dispatch({
        type: 'FETCH_RESULTS_SUCCESS',
        payload: {loading: false, movies: res.data.results},
      });
    })
    .catch(e => {
      dispatch({
        type: 'FETCH_RESULTS_FAIL',
        payload: {loading: false, error: e},
      });
    });
};
