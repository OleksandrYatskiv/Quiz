import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizReducer } from './services/quiz';

const rootReducer = combineReducers({
  quizReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
