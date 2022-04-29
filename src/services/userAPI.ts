import axios from 'axios';
import Config from 'react-native-config';

export const userAPI = axios.create({
  baseURL: Config.USER_AUTH_API_URL,
});
