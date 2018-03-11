import React, { Component } from 'react';

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }


  render () {
    return (
      <div>
        <h2>Sign In</h2>
        <div>
        <input
          className=""
          type="email"
          placeholder="email" 
          onChange={(e) => this.setState({email: e.target.value})}
        />
        <input
          className=""
          type="password"
          placeholder="password" 
          onChange={(e) => this.setState({password: e.target.value})}
        />
        <button>
          Sign In
        </button>
        </div>
        <div>
          {this.state.error.message}
        </div>
      </div>
    );
  }
}

export default SignIn;