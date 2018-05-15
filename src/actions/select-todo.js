'use strict';

export const TODO_SELECTED = 'TODO_SELECTED';

export default (todo) => {
  return { type: TODO_SELECTED, payload: todo };
};
