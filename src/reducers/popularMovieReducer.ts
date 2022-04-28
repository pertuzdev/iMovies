import {Movie, MovieState} from '../interfaces/Movie';

export type MovieActionType =
  | {
      type: 'FETCH_MOVIES_SUCCESS';
      payload: {
        loading: boolean;
        movies: Movie[];
      };
    }
  | {
      type: 'FETCH_MOVIES_FAIL';
      payload: {
        loading: boolean;
        error: Object;
      };
    }
  | {
      type: 'FETCH_MOVIES_REQUEST';
      payload: {
        loading: boolean;
      };
    };

export default function popularMovieReducer(
  state: MovieState,
  action: MovieActionType,
): MovieState {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {...state, loading: true};
    case 'FETCH_MOVIES_SUCCESS':
      return {...state, loading: false, movies: action.payload.movies};
    case 'FETCH_MOVIES_FAIL':
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}
