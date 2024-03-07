import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2';

const networkManager = axios.create({
  baseURL: BASE_URL,
});

// Add request interceptor
networkManager.interceptors.request.use(
  function (config) {
    config.url = config.url + '&apiKey=e00e0606ce104e4e8ec4add96d8608a4';
    console.log(config);

    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

// Add response interceptor
networkManager.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

export default networkManager;
