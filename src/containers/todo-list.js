'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectToDo from '../actions/select-todo';

class ToDoList extends Component {
    renderList() {
      return this.props.todos.map(todo => {
        return (
          <li
            className='list-group-item'
            key={ todo.description }
            onClick={ () => this.props.selectToDo(todo)}>
            {todo.description}
            </li>);
      });
    }

    render() {
      return (
          <ul className='list-group col-md-4'>
            { this.renderList() }
          </ul>
      );
    }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToPros(dispatch) {
  return bindActionCreators({ selectToDo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToPros)(ToDoList);
