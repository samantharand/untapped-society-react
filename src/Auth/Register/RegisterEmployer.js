import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'
import { Form, Button, Label, Input } from 'semantic-ui-react'
import SearchCompany from './SearchCompany';

export default class Register extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      checkPassword: '',
      company: ""
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  selectCompany = (id) => {
    console.log('clicked')
    this.setState({ company: id })
  }
  // API call
  register = async (registerInfo) => {
    const url = process.env.REACT_APP_API_URL + "api/v1/users/create"

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
        jobseeker: false,
        company: this.state.company
      })
    }
  }

  render() {
    const { username, password, checkPassword, company } = this.state
    return (
      <div className='RegisterContainer'>
        <Form onSubmit={ this.register }>
          <h3> Register </h3>
          <Label> Username </Label>
          <Input 
            placeholder='Username'
            name='username'
            value={ username }
            onChange={ this.onChange }
          />
          <SearchCompany selectCompany={this.selectCompany}/>
          <Label> Password </Label>
          <Input 
            placeholder='Password'
            type='password'
            name='password'
            value={ password }
            onChange={ this.onChange }
          />
          <Label> Confirm Password </Label>
          <Input 
            placeholder='Confirm Password'
            type='password'
            name='checkPassword'
            value={ checkPassword }
            onChange={ this.onChange }
          />
          <Button onClick={ this.onRegister }> Register </Button>
        </Form>
      </div>
    )
  }
}