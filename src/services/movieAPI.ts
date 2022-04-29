import axios from 'axios';
import Config from 'react-native-config';

export const movieAPI = axios.create({
  baseURL: Config.MOVIES_API_URL,
  params: {
    api_key: Config.MOVIES_API_KEY,
  },
});
