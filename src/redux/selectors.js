import { createSelector } from '@reduxjs/toolkit';

export const selectTodoos = state => state.todos.items;
export const selectFilter = state => state.filter;

export const selectVisiblTodo = createSelector(
  [selectTodoos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
