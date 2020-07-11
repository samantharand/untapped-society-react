import React, { Component } from 'react';
import LoginRegister from './LoginRegister';

export default class AdminManager extends Component {
  constructor() {
    super();
    this.state = {
      admin: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <LoginRegister/>
      </React.Fragment>
    );
  }
}