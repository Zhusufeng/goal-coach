import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';

class GoalItem extends Component {

  completeGoal () {
    console.log()
    // add to complete goals on the db
    // remove this goal from the goals reference
    const { email } = this.props.user;
    const { title } = this.props.goal;
    console.log('email', email, 'title', title);

    // add completed goal to firebase db
    completeGoalRef.push({email, title});
  }

  render () {
    // console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;

    return (
      <div
        style={{margin: '5px'}}
      >
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps, null)(GoalItem);