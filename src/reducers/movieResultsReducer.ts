import {Movie, MovieState} from '../interfaces/Movie';

export type MovieResultsType =
  | {
      type: 'FETCH_RESULTS_SUCCESS';
      payload: {
        loading: boolean;
        movies: Movie[];
      };
    }
  | {
      type: 'FETCH_RESULTS_FAIL';
      payload: {
        loading: boolean;
        error: Object;
      };
    }
  | {
      type: 'FETCH_RESULTS_REQUEST';
      payload: {
        loading: boolean;
      };
    };

export default function movieResultsReducer(
  state: MovieState,
  action: MovieResultsType,
): MovieState {
  switch (action.type) {
    case 'FETCH_RESULTS_REQUEST':
      return {...state, loading: true};
    case 'FETCH_RESULTS_SUCCESS':
      return {...state, loading: false, movies: action.payload.movies};
    case 'FETCH_RESULTS_FAIL':
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}
