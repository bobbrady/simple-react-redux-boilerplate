'use strict';

import React, { Component } from 'react';
import ToDoList from '../containers/todo-list';
import ToDoDetail from '../containers/todo-detail';

class App extends Component {
  render() {
    return (
      <div>
        <ToDoList />
        <ToDoDetail />
      </div>
    );
  }
}

export default App;
