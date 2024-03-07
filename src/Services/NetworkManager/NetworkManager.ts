import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

const networkManager = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor
networkManager.interceptors.request.use(
  function (config) {
    config.params.apiKey = 'e00e0606ce104e4e8ec4add96d8608a4';
    return config;
  },
  function (error) {
    console.log('Request error > ', error);
    return Promise.reject(error);
  },
);

// Add response interceptor
networkManager.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log('Response error > ', error);
    return Promise.reject(error);
  },
);

export default networkManager;
