import axios from '../service';

const quizzes = {
  get: () => axios.get('/Quizzes')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/Quizzes', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { quizzes };