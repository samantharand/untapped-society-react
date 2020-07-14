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
		const { profile } = this.state
		return (
			<React.Fragment>
				<p> profile </p>
				<p> {profile.date_of_birth} </p>
				<p> {profile.education} </p>
				<p> {profile.email} </p>
				<p> {profile.ethinicity} </p>
				<p> {profile.industry} </p>
				<p> {profile.language} </p>
				<p> {profile.location} </p>
				<p> {profile.name} </p>
				<p> {profile.payrange} </p>
				<p> {profile.skillset} </p>
			</React.Fragment>
		)
	}

}