import axios from 'axios';

// setting owr base url

export const Api = axios.create({
  baseURL: 'https://dummyjson.com',
});
