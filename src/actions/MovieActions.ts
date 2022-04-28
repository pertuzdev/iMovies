import {movieAPI} from '../services/movieAPI';

import {MovieAPIResponse} from '../interfaces/Movie';

import {MovieActionType} from '../reducers/movieReducer';
import {MovieRecommendationActionType} from '../reducers/movieRecommendationReducer';

type getPopularMoviesProps = {
  dispatch: React.Dispatch<MovieActionType>;
};

type getRecommendationsProps = {
  dispatch: React.Dispatch<MovieRecommendationActionType>;
  id: number;
};

export const getPopularMovies = async ({dispatch}: getPopularMoviesProps) => {
  dispatch({type: 'FETCH_MOVIES_REQUEST', payload: {loading: true}});
  movieAPI
    .get<MovieAPIResponse>('/popular')
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
}: getRecommendationsProps) => {
  dispatch({type: 'FETCH_RECOMMENDATIONS_REQUEST', payload: {loading: true}});
  movieAPI
    .get<MovieAPIResponse>(`${id}/similar`)
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
