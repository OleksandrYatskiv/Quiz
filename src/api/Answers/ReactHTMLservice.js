import axios from 'axios';

export default axios.create({
  baseURL: 'https://650ec71b54d18aabfe99751f.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
