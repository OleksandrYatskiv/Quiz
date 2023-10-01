/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import actions from './actions';
import thunks from './thunks';

const initialState = {
  quizzes: [],
  filter: '',
  filteredQuizzes: [],
  favouritesList: [],
};

export const quizReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      state.filter = payload;
      state.filteredQuizzes = state.quizzes.filter((quiz) => {
        const quizIntial = quiz.name.toLowerCase();
        return quizIntial.includes(payload.toLowerCase());
      });
    });
    builder.addCase(actions.filterFavQuizzesAction, (state) => {
      state.favouritesList = state.quizzes.filter((quiz) => quiz.isFavourite);
    });
    builder.addCase(thunks.fetchQuizzes.fulfilled, (state, { payload }) => {
      state.quizzes = payload;
    });
    builder.addCase(thunks.putFavQuiz.fulfilled, (state, { payload }) => {
      const quizToChangeIndex = state.quizzes.findIndex((quiz) => quiz.id === payload.id);

      if (quizToChangeIndex !== -1) state.quizzes[quizToChangeIndex] = payload.quiz;
    });
    builder.addCase(thunks.deleteQuiz.fulfilled, (state, { payload }) => {
      state.quizzes = state.quizzes.filter((quiz) => quiz.id !== payload);
      state.favouritesList = state.favouritesList.filter((quiz) => quiz.id !== payload);
      state.filteredQuizzes = state.filteredQuizzes.filter((quiz) => quiz.id !== payload);
    });
  },
});

export default quizReducer.reducer;
