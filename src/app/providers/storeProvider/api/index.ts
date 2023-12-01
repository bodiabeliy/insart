import axios from 'axios';

export default axios.create({
  baseURL:  __PRIVAT24_URL,
  responseType: 'json',
});
