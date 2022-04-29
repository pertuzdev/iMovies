import axios from 'axios';

export const searchMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
  params: {
    api_key: '67a7664891dffbd9c47cd642d786395b',
  },
});
