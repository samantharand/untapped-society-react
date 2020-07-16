import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'
import RegisterEmployer from './RegisterEmployer';
import { Form, Button, Label, Input } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Register extends Component {
  constructor() {
  	super()

  	this.state = {
  		username: '',
  		password: '',
      checkPassword: '',
      jobseeker: true
  	}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleJobseeker = () => {
    this.setState({ jobseeker: !this.state.jobseeker })
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
      // console.log('registerJson', registerJson);
      // return registerJson
      if(registerJson.status === 201) {
        this.props.history.push('/createprofile')
      }

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
    const { username, password, checkPassword, jobseeker } = this.state
    const JobseekerRegister = (
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

    const EmployerRegister = (
      <RegisterEmployer />
    )
    return (
      <React.Fragment>
      {jobseeker ? JobseekerRegister : EmployerRegister}
      <Button onClick={ this.toggleJobseeker }> 
      {(jobseeker ? "register as employer" : "register as job seeker")}
      </Button>
      </React.Fragment>
    )
  }
}

export default withRouter(Register)