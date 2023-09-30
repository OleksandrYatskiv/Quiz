import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { quizzes } from '../../../api/Quizzes/Quizzes';

const fetchQuizzes = createAsyncThunk(`${moduleName}/fetchCountries`, async () => {
  const response = quizzes.get();
  return response;
});

const putFavQuiz = createAsyncThunk(`${moduleName}/putFavQuiz`, async (quiz) => {
  quizzes.put(quiz);
  return quiz.id;
});

export default {
  fetchQuizzes,
  putFavQuiz,
};
