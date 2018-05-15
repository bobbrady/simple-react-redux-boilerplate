'use strict';

import { TODO_SELECTED } from '../actions/select-todo';

export default (state=null, action) => {
  switch(action.type) {
    case  TODO_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
