import React, { Component } from 'react';

export default class EmployerInput extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onClick = () => {
    const { email } = this.state;
    this.props.addEmployer(email);
    this.setState({ email: "" });
  }

  render() {
    const { email } = this.state
    return (
      <React.Fragment>
        <input 
          value={email}
          onChange={this.onChange}
          name="email"
        />
        <button 
        onClick={this.onClick}
        >add</button>
      </React.Fragment>
    )
  }
}