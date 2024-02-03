import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65bd5dd5b51f9b29e9335ab7.mockapi.io';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    console.log('todos/fetchTodos');
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addTodos = createAsyncThunk(
  'todos/addTodos',
  async (todo, thunkAPI) => {
    console.log('todos/addTodos');
    try {
      const { data } = await axios.post('/todos', todo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTodos = createAsyncThunk(
  'todos/deleteTodos',
  async (todoId, thunkAPI) => {
    console.log('todos/deleteTodos');
    try {
      const { data } = await axios.delete(`/todos/${todoId}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
