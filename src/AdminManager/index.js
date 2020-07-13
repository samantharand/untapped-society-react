import React, { Component } from 'react';
import LoginRegister from './LoginRegister';
import CompanyInfoManager from './CompanyInfoManager';

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
        
        { loggedIn 
          ? <CompanyInfoManager/> 
          : <LoginRegister loggedIn={this.userLoggedIn}/>
        }
      </React.Fragment>
    );
  }
}