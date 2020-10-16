import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.112:1337',
});

export default api;
