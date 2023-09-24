import axios from 'axios';

export default axios.create({
  baseURL: 'https://650f419c54d18aabfe99f7ae.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
