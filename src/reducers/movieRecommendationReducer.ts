import {Movie, MovieState} from '../interfaces/Movie';

export type MovieRecommendationActionType =
  | {
      type: 'FETCH_RECOMMENDATIONS_SUCCESS';
      payload: {
        loading: boolean;
        movies: Movie[];
      };
    }
  | {
      type: 'FETCH_RECOMMENDATIONS_FAIL';
      payload: {
        loading: boolean;
        error: Object;
      };
    }
  | {
      type: 'FETCH_RECOMMENDATIONS_REQUEST';
      payload: {
        loading: boolean;
      };
    };

export default function movieRecommendationReducer(
  state: MovieState,
  action: MovieRecommendationActionType,
): MovieState {
  switch (action.type) {
    case 'FETCH_RECOMMENDATIONS_REQUEST':
      return {...state, loading: true};
    case 'FETCH_RECOMMENDATIONS_SUCCESS':
      return {...state, loading: false, movies: action.payload.movies};
    case 'FETCH_RECOMMENDATIONS_FAIL':
      return {...state, loading: false, error: action.payload.error};
    default:
      return state;
  }
}
