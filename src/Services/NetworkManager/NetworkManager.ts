import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

const networkManager = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor
networkManager.interceptors.request.use(
  function (config) {
    config.url = config.url + '&apiKey=215568410c074611b7301d7574e4d5cc';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add response interceptor
networkManager.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// networkManager.get('/top-headlines?pageSize=100');

export default networkManager;
