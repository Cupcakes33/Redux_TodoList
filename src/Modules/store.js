import { act } from "react-dom/test-utils";
import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DONE_TODO = "DONE_TODO";
const DELETE_TODO = "DELETE_TODO";
const IMPORTENT_TODO = "IMPORTENT_TODO";

export const addTodo = ({ title, contents, isImportent }) => {
  return {
    type: ADD_TODO,
    todo: {
      id: Date.now(),
      title: title,
      contents: contents,
      isImportent: isImportent,
      done: false,
    },
  };
};

export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    id,
  };
};

export const importentTodo = (id) => {
  return {
    type: IMPORTENT_TODO,
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const init = [];

const todos = (state = init, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];

    case DONE_TODO:
      const isChecked = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
      return isChecked;

    case DELETE_TODO:
      const isDelete = state.filter((todo) => {
        return todo.id !== action.id;
      });
      return isDelete;

    case IMPORTENT_TODO:
      const isImportent = state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isImportent: !todo.isImportent };
        } else {
          return todo;
        }
      });
      return isImportent;

    default:
      return state;
  }
};

const store = createStore(todos);
export default store;
