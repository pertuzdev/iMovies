import {useReducer, useEffect} from 'react';

import {MovieState} from '../interfaces/Movie';

import {getRecommendations} from '../actions/MovieActions';
import movieRecommendationReducer from '../reducers/movieRecommendationReducer';

type Props = {
  id: number;
};

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export function useMovieRecommendations({id}: Props) {
  const [recommendationsState, dispatch] = useReducer(
    movieRecommendationReducer,
    initialState,
  );

  useEffect(() => {
    getRecommendations({dispatch, id});
  }, [id]);

  const {
    movies: recommendedMovies,
    loading: isRecommendationLoading,
    error: recommendationsHasError,
  } = recommendationsState;

  return {recommendedMovies, isRecommendationLoading, recommendationsHasError};
}
