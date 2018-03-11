import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal () {
    console.log('this', this);

    const { title } = this.state;
    const { email } = this.props;

    // Add to database
    goalRef.push({email, title}); 
  }


  render () { 
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}} 
            onChange={(e) => this.setState({title: e.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  const { email } = state; // grab email from store
  return {
    email
  };
}

export default connect(mapStateToProps, null)(AddGoal);