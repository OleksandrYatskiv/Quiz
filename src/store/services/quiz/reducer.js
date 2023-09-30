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

export const quizzesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      state.filter = payload;
      state.filteredCountries = state.countries.filter((quiz) => {
        const quizIntial = quiz.country.toLowerCase();
        return quizIntial.indexOf(payload.toLowerCase()) !== -1; // rewrite using includes method
      });
    });
    builder.addCase(thunks.fetchQuizzes.fulfilled, (state, { payload }) => {
      state.quizzes = payload;
    });
    builder.addCase(thunks.putFavQuiz.fulfilled, (state, { payload }) => {
      state.quizzes = payload;
    });
  },
});

export default quizzesReducer.reducer;
