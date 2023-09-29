/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    cardList: [],
    loading: false,
    error: null,
    searchTerm: '',
  },
  reducers: {
    setCardList: (state, action) => {
      state.cardList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    deleteCard: (state, action) => {
      state.cardList = state.cardList.filter((quiz) => quiz.id !== action.payload);
    },
  },
});

export const {
  setCardList,
  setLoading,
  setError,
  setSearchTerm,
  deleteCard,
} = quizSlice.actions;

export default quizSlice.reducer;
