import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'
import { Form, Button, Label, Input } from 'semantic-ui-react'
import '../Auth.css'

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
      <div className='LoginContainer'>
        <div className='LoginBody'>
          <h1> Welcome! </h1>


          <div className='New'>
            <p> New to Untapped Society? Please sign up below </p>
            <div className='LoginNewButtons'>
              <Button> THE TALENT </Button>
              <Button> THE EMPLOYER </Button>
            </div>
            <p> or </p>
          </div>


          <div className='FormContainer'>
            <Form onSubmit={ this.onLogin }>
              <Input 
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ this.onChange }
              />
              <Input 
                placeholder='Password'
                type='password'
                name='password'
                value={ password }
                onChange={ this.onChange }
              />
              <p> Forgot your password / haven't set a password? </p>
              <Button> Login </Button>
            </Form>
          </div>

        </div>

        <footer className='AuthFooter'/> 
      </div>
    )
  }
}