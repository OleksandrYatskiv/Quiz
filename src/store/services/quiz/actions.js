import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

const filterAction = createAction(`${moduleName}/filterAction`, (payload) => ({ payload }));

const filterFavQuizzesAction = createAction(`${moduleName}/filterFavQuizzesAction`); // attantion here

export default {
  filterAction,
  filterFavQuizzesAction,
};
