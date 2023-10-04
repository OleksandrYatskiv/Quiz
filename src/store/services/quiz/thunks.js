import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { quizzes } from '../../../api/Quizzes/Quizzes';

const fetchQuizzes = createAsyncThunk(`${moduleName}/fetchQuizzes`, async () => {
  const response = quizzes.get();
  return response;
});

const putFavQuiz = createAsyncThunk(`${moduleName}/putFavQuiz`, async (quiz) => {
  quizzes.put(quiz.id, quiz);
  return { id: quiz.id, quiz };
});

const deleteQuiz = createAsyncThunk(`${moduleName}/deleteQuiz`, async (id) => {
  quizzes.delete(id);
  return id;
});

export default {
  fetchQuizzes,
  putFavQuiz,
  deleteQuiz,
};
