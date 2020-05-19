import { createAction, createReducer } from '@reduxjs/toolkit';

// ADD, DELETE, COMPLETE, UPDATE
const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');
const completeToDo = createAction('COMPLETE');
const updateToDo = createAction('UPDATE');
const setInit = createAction('INIT');

const initialState = [];

const arrToDoReducer = createReducer(initialState, {
  [addToDo]: (state, action) => {
    state.push(action.payload);
  },
  [deleteToDo]: (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  },
  [completeToDo]: (state, action) => {
    const idx = state.findIndex((toDo) => toDo.id === action.payload);
    // console.log(idx);
    state[idx] = {
      ...state[idx],
      isCompleted: !state[idx].isCompleted,
    };
  },
  [updateToDo]: (state, action) => {
    const idx = state.findIndex((toDo) => toDo.id === action.payload.id);
    state[idx] = {
      ...state[idx],
      text: action.payload.text,
    };
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

export default arrToDoReducer;
