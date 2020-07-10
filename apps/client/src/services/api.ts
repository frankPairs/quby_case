import axios from 'axios';

const BASE_URL = 'http://localhost:9090';

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
