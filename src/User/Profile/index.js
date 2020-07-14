import React, { Component } from 'react'

export default class Profile extends Component {

	constructor() {
		super()

		this.state = {
			profile: {}
		}
	}

	componentDidMount() {
		this.getProfileDetails()
	}

	// API call to get profile details
	getProfileDetails = async () => {
		const url = process.env.REACT_APP_API_URL + 'api/v1/profiles/view'
		
		const profileResult = await fetch(url, {
			credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
		})

		console.log('profileResult', profileResult);

		const profileJson = await profileResult.json()
		console.log('profileJson', profileJson);
		this.setState({
			profile: profileJson
		})
	}

	render() {
		return (
			<p> profile </p>
		)
	}

}