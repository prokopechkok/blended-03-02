import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';

export const store = configureStore({
  reducer: todosReducer,
});
