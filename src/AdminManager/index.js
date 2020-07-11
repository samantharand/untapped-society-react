import React, { Component } from 'react';
import LoginRegister from './LoginRegister';

export default class AdminManager extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }
  // loggedIn: called when user is registered or logged in with admin account
  userLoggedIn = (userId) => {
    console.log(userId)
    // is user id is less than 5 this account is an admin account
    if (userId < 5) {
      this.setState({ loggedIn: true });
    }
  }
  render() {
    const {loggedIn} = this.state
    return (
      <React.Fragment>
        <LoginRegister loggedIn={this.userLoggedIn}/>
        { loggedIn ? "you are logged in" : "you are not logged in"}
      </React.Fragment>
    );
  }
}