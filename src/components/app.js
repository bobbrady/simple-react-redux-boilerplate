'use strict';

import React, { Component } from 'react';
import ToDoList from '../containers/todo-list';
import ToDoDetail from '../containers/todo-detail';

class App extends Component {
  render() {
    return (
      <div className="row">
        <h1 className="col-md-12">Simple React-Redux Boilerplate</h1>
        <ToDoList />
        <ToDoDetail />
      </div>
    );
  }
}

export default App;
