import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(
  {
    name: "todos",
    initialState: {
      todos: []
    },
    reducers: {
      addTodo(state, action) {
        
        state.todos.push(
          {
            id: new Date().toISOString(),
            text: action.payload.text,
            complited: false,
          }
        )
      },
      toggleTodo(state, action) { 
        const togled = state.todos.find(todo => todo.id === action.payload.id)
        togled.complited = !togled.complited
      },
      removeTodo(state, action) {
        state.todos = state.todos.filter(todo=> todo.id !== action.payload.id) },
    },
  }
);
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;