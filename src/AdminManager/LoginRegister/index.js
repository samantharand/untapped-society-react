import React, { Component } from 'react';

export default class LoginRegister extends Component {
  constructor() {
    super();
    this.state = {
      loginForm: false, // true if login is selected, false if user is trying to register
      username: "",
      password: "",
      checkPassword: ""
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // API call to register a user with info as parameter
  register = async (info) => {
    const url = "http://localhost:8000/api/v1/users/create"
    try {
      const res = await fetch(url, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await res.json();
      console.log(json)
      return json;
    } catch (err) {
      console.error("error")
    }
  }
  // Register event handeler
  onRegister = async (e) => {
    e.preventDefault()
    if (this.state.checkPassword !== this.state.password) {
      // the password does not match
    } else {
      try {
        const result = await this.register({
          username: this.state.username,
          password: this.state.password,
          jobseeker: true
        })
      } catch (err) {
        console.error(err)
      }
    }
  }

  render() {
    const {username, password, checkPassword, loginForm} = this.state
    const RegisterForm = (
      <form onSubmit={this.onRegister}>
        <label>Username</label>
        <input 
        placeholder='Username'
        name='username'
        value={username}
        onChange={this.onChange}
        />
        <label>Password</label>
        <input 
        placeholder='Password' 
        type='password'
        name='password'
        value={password}
        onChange={this.onChange}
        />
        <label>Confirm Password</label>
        <input 
        placeholder='Re-enter Password' 
        type='password'
        name='checkPassword'
        value={checkPassword}
        onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
    const LoginForm = (
      <h1>this is login form</h1>
    )
    return (
      <React.Fragment>
        {loginForm ? LoginForm : RegisterForm}
      </React.Fragment>
    );
  }
}