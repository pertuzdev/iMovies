import {useReducer, useEffect} from 'react';

import {getRecommendations} from '../actions/MovieActions';
import {MovieState} from '../interfaces/Movie';
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

  const {movies: recommendedMovies, loading, error} = recommendationsState;

  return {recommendedMovies, loading, error};
}
