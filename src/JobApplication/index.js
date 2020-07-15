import React, { Component } from 'react'

export default class JobApplication extends Component {
	// button that allows user to apply for jobs
	// pass current user in via props

	componentDidMount() {
		console.log('props in JobApplication',this.props);
	}


	// API call
	applyForJob = async () => {
		const url = process.env.REACT_APP_API_URL 
	}

	render() {
		return(
			<p> Job Application </p>
		)
	}
}