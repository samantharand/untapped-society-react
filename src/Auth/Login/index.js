import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'

export default class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // API call
  login = async (loginInfo) => {
    console.log('login');
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/login"

    try {
      
      const loginResult = await fetch(url, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('loginResult', loginResult);

      const loginJson = await loginResult.json()

      // return loginJson
      this.props.setCurrentUser(loginJson.data)
      console.log('loginJson', loginJson);

    } catch (error) {
      console.error(error)
    }
  }

  // event handler
  onLogin = async (e) => {
    e.preventDefault()
    console.log('onLogin');
    try {
      
      const result = await this.login({
        username: this.state.username,
        password: this.state.password
      })

    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <React.Fragment>
        <form onSubmit={ this.onLogin }>
          <p> Login </p>
          <label> Username </label>
          <input 
            placeholder='Username'
            name='username'
            value={ username }
            onChange={ this.onChange }
          />
          <label> Password </label>
          <input 
            placeholder='Password'
            type='password'
            name='password'
            value={ password }
            onChange={ this.onChange }
          />
          <button> Login </button>
        </form>
        <p> Or login using google </p>
        <GoogleBtn />
      </React.Fragment>
    )
  }
}