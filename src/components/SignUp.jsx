import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signUp () {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log('err', err);
      })
  }

  render () {
    return (
      <div className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={(e) => this.setState({email: e.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={(e) => this.setState({password: e.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}

export default SignUp;