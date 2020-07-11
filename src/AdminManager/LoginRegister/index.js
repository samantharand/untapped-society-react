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
      // console.log(json)
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
          jobseeker: false
        })
        // console.log(result)
        this.props.loggedIn(result.data.id)
      } catch (err) {
        console.error(err)
      }
    }
  }

  // API call for login with info
  login = async (info) => {
    const url = "http://localhost:8000/api/v1/users/login"
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
      // console.log(json)
      return json;
    } catch (err) {
      console.error("error")
    }
  }

  // Login event handler
  onLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await this.login({
        username: this.state.username,
        password: this.state.password
      });
      // console.log(result)
      this.props.loggedIn(result.data.id)
    } catch (err) {
      console.error(err)
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
      <form onSubmit={this.onLogin}>
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
        <button>Submit</button>
      </form>
    )
    return (
      <React.Fragment>
        {loginForm ? LoginForm : RegisterForm}
      </React.Fragment>
    );
  }
}