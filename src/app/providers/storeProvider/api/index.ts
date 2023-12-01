import axios from 'axios';

export default axios.create({
  baseURL:  __IPDATA_URL,
  responseType: 'json',
});
