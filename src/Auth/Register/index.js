import React, { Component } from 'react';
import GoogleBtn from '../../GoogleBtn'

export default class Register extends Component {
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
	  		<p> Reg </p>
	  	</React.Fragment>
  	)
  }
}