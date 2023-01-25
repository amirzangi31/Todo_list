import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!state.todos.find((item) => item.title === action.payload))
        state.todos.push({ id: uuidv4() + 1, title: action.payload });
      return {
        ...state,
        todos: [...state.todos],
      };
    case "REMOVE_TODO":
      const newTodos = state.todos.filter((item) => item.id !== action.payload);

      return {
        ...state,
        todos: [...newTodos],
      };
    case "ACTIVE":
      const indexA = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      console.log(state);
      state.todos[indexA] = { ...state.todos[indexA], completed: true };
      return {
        ...state,
      };
    case "NO_ACTIVE":
      const indexB = state.todos.findIndex(
        (item) => item.id === action.payload
      );
      state.todos[indexB] = { ...state.todos[indexB], completed: false };
      return {
        ...state,
      };
    case "EDIT":
      const indexE = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos[indexE] = {
        ...state.todos[indexE],
        title: action.payload.text,
      };
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
