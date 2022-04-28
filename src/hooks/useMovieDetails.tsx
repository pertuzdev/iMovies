import {useMovies} from './useMovies';

type Props = {
  id: number;
};

export function useMovieDetails({id}: Props) {
  const {movies} = useMovies();
  const movieSummary = movies.find(movie => movie.id === id);

  return {movieSummary};
}
