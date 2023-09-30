import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { quizzesReducer } from './services/quiz';

const rootReducer = combineReducers({
  quizzesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
