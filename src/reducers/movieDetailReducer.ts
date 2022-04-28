import {Movie, MovieDetailState, MovieFull} from '../interfaces/Movie';

export type MovieDetailActionType =
  | {
      type: 'FETCH_DETAILS_SUCCESS';
      payload: {
        loading: boolean;
        movie: MovieFull | Movie;
      };
    }
  | {
      type: 'FETCH_DETAILS_FAIL';
      payload: {
        loading: boolean;
        error: Object;
      };
    }
  | {
      type: 'FETCH_DETAILS_REQUEST';
      payload: {
        loading: boolean;
      };
    };

export default function movieDetailReducer(
  state: MovieDetailState,
  action: MovieDetailActionType,
): MovieDetailState {
  switch (action.type) {
    case 'FETCH_DETAILS_REQUEST':
      return {...state, loading: true};
    case 'FETCH_DETAILS_SUCCESS':
      return {...state, loading: false, movie: action.payload.movie};
    case 'FETCH_DETAILS_FAIL':
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}
