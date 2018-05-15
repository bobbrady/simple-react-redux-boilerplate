'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDoDetail extends Component {

    render() {
      if (!this.props.activeToDo) {
        return <div className='col-sm-8'>Select a book to get started.</div>;
      } else {
        return (
          <div className='col-md-8'>
            <h3>Details for:</h3>
            <div>Description: { this.props.activeToDo.description }</div>
            <div>Time Estimate (hr): { this.props.activeToDo.timeEstHr }</div>
          </div>
        );
      }
    }
}

function mapStateToProps(state) {
  return {
    activeToDo: state.activeToDo
  };
}

export default connect(mapStateToProps)(ToDoDetail);
