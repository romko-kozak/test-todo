import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },

    updateTodoName(state, action) {
      const { id, text } = action.payload;
      const todo = state.find({ id });
      todo && (todo.text = text);
    },

    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload.id);
      todo && (todo.done = action.payload.done);
    },

    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload.id );
    }
  }
});

export const { addTodo, updateTodoName, toggleTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;