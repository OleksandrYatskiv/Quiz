import axios from 'axios';

export default axios.create({
  baseURL: 'https://650f366a54d18aabfe99f063.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
