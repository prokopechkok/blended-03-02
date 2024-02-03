import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});

// Генератори екшенів
export const { addTodo, deleteTodo } = todosSlice.actions;
// Редюсер слайсу
export const todosReducer = todosSlice.reducer;
