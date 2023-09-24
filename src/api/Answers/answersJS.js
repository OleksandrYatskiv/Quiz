import axios from '../service';

const answersJS = {
  get: () => axios.get('/Js-quiz-questions')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  getById: (id) => axios.get(`/Js-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/Js-quiz-questions', params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  put: (id, params) => axios.put(`/Js-quiz-questions/${id}`, params)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  delete: (id) => axios.delete(`/Js-quiz-questions/${id}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
};

export { answersJS };
