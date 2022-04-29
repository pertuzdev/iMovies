import axios from 'axios';

export const userAPI = axios.create({
  baseURL: 'https://reqres.in/api',
});
