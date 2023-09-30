/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    cardList: [],
    loading: false,
    error: null,
    searchTerm: '',
    favouriteList: [],
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
    setFavouritesList: (state, action) => {
      state.favouriteList = state.favouriteList.map((quiz) => {
        if (quiz.id === action.payload) {
          return {
            ...quiz,
            favourite: !quiz.favourite,
          };
        }

        return quiz;
      });
    },
  },
});

export const {
  setCardList,
  setLoading,
  setError,
  setSearchTerm,
  deleteCard,
  setFavouritesList,
} = quizSlice.actions;

export default quizSlice.reducer;
