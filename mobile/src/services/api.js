import axios from 'axios';

const api = axios.create({
  baseURL: "https://listapplicationto-do.herokuapp.com/"
});

export default api;