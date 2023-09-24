import axios from './ReactHTMLservice';

const answersReact = {
  get: () => axios.get('/React-quiz-questions')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  getById: (id) => axios.get(`/React-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/React-quiz-questions', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  put: (id, params) => axios.put(`/React-quiz-questions/${id}`, params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  delete: (id) => axios.delete(`/React-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { answersReact };
