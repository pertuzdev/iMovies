import {MovieAPIResponse} from '../interfaces/Movie';
import {MovieActionType} from '../reducers/movieReducer';
import {movieAPI} from '../services/movieAPI';

type Props = {
  dispatch: React.Dispatch<MovieActionType>;
};

export const getPopularMovies = async ({dispatch}: Props) => {
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
