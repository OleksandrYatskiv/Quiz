import axios from './ReactHTMLservice';

const answersHTML = {
  get: () => axios.get('/HTML-quiz-questions')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  getById: (id) => axios.get(`/HTML-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/HTML-quiz-questions', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  put: (id, params) => axios.put(`/HTML-quiz-questions/${id}`, params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  delete: (id) => axios.delete(`/HTML-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { answersHTML };
