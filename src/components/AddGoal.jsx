import React, { Component } from 'react';

class AddGoal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal () {
    console.log('this.state', this.state);
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

export default AddGoal;