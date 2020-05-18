import { createAction, createReducer } from '@reduxjs/toolkit';

// ADD, DELETE, COMPLETE, UPDATE
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');
const completeToDo = createAction('COMPLETE');
const updateToDo = createAction('UPDATE');
const setInit = createAction('INIT');

const initialState = null;

const toDoReducer = createReducer(initialState, {
  [addToDo]: (state, action) => {
    const obj = action.payload;
    const newState = {
      ...obj,
      ...state,
    };
    return newState;
  },
  [deleteToDo]: (state, action) => {
    delete state[action.payload];
  },
  [completeToDo]: (state, action) => {
    const newState = {
      ...state,
      [action.payload]: {
        ...state[action.payload],
        isCompleted: !state[action.payload].isCompleted,
      },
    };
    return newState;
  },
  [updateToDo]: (state, action) => {
    const newState = {
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        text: action.payload.text,
      },
    };
    return newState;
  },
  [setInit]: (state, action) => {
    return action.payload;
  },
});

export const actionCreators = {
  addToDo,
  deleteToDo,
  updateToDo,
  completeToDo,
  setInit,
};

export default toDoReducer;
