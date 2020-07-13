import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'

export default class Login extends Component {
  constructor() {
    super()

    this.state = {
      loginForm: true,
      username: '',
      password: '',

    }
  }


  render() {
    return (
      <React.Fragment>
        <GoogleBtn />
        <p> Login </p>
      </React.Fragment>
    )
  }
}