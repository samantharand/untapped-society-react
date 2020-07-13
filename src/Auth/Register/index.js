import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'

export default class Register extends Component {
  constructor() {
  	super()

  	this.state = {
  		username: '',
  		password: '',
      checkPassword: ''
  	}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // API call
  register = async (registerInfo) => {
    const url = "http://localhost:8000/api/v1/users/create"

    try {
      
      const registerResult = await fetch(url, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(registerInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log('registerResult');
      const registerJson = await registerResult.json()
      console.log('registerJson', registerJson);
      // return registerJson

    } catch (error) {
      console.error(error)
    }
  }

  // event handler
  onRegister = async (e) => {
    e.preventDefault()
    if (this.state.password !== this.state.checkPassword){
      console.log('passwords dont match');
    } else {
      const result = await this.register({
        username: this.state.username,
        password: this.state.password,
        jobseeker: true
      })
    }
  }

  render() {
    const { username, password, checkPassword } = this.state
    return (
      <React.Fragment>
        <form onSubmit={ this.register }>
          <p> Register </p>
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
          <label> Confirm Password </label>
          <input 
            placeholder='Confirm Password'
            type='password'
            name='checkPassword'
            value={ checkPassword }
            onChange={ this.onChange }
          />
          <button onClick={ this.onRegister }> Register </button>
        </form>
        <p> Or register using google </p>
        <GoogleBtn />
      </React.Fragment>
    )
  }
}