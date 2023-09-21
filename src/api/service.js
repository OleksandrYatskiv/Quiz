import axios from 'axios';

export default axios.create({
  baseURL: 'https://64f722589d77540849532910.mockapi.io/api/v1',
  headers: { 'Content-Type': 'application/json' },
});
