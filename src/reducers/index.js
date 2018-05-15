'use strict';

import { combineReducers } from 'redux';
import ToDosReducer from './reducer-todos';
import ActiveToDoReducer from './reducer-active-todo';

const rootReducer = combineReducers({
  todos: ToDosReducer,
  activeToDo: ActiveToDoReducer
});

export default rootReducer;
