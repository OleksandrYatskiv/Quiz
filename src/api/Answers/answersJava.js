import axios from './CSSJavaService';

const answersJava = {
  get: () => axios.get('/Java-quiz-questions')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  getById: (id) => axios.get(`/Java-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/Java-quiz-questions', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  put: (id, params) => axios.put(`/Java-quiz-questions/${id}`, params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  delete: (id) => axios.delete(`/Java-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { answersJava };
