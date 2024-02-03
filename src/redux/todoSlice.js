import { createSlice } from '@reduxjs/toolkit';
import { addTodos, deleteTodos, fetchTodos } from './operation';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },

  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log('action fetch: ', action.payload);
        state.items = action.payload;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        console.log('action add: ', action.payload);
        state.items.push(action.payload);
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        console.log('action delete: ', action.payload);
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export const todosReducer = todosSlice.reducer;
