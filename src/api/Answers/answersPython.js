import axios from './PythonService';

const answersPython = {
  get: () => axios.get('/Python-quiz-questions')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  getById: (id) => axios.get(`/Python-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/Python-quiz-questions', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  put: (id, params) => axios.put(`/Python-quiz-questions/${id}`, params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  delete: (id) => axios.delete(`/Python-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { answersPython };
