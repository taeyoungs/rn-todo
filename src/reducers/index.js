import { combineReducers } from 'redux';

import toDoReducer from './toDoReducer';
import arrToDoReducer from './arrToDoReducer';

const rootReducer = combineReducers({
  arrToDoReducer,
});

export default rootReducer;
