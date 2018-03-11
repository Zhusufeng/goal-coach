import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount () {
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const {email, title} = completeGoal.val();
        completeGoals.push({email, title});
      });
      console.log('completeGoals', completeGoals);
    });
  }

  render () {
    return (
      <div>Complete Goal List</div>
    );
  }
}

function mapStateToProps (state) {
  const { completedGoals } = state;
  return {
    completedGoals
  };
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);