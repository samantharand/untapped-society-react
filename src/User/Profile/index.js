import React, { Component } from 'react'

export default class Profile extends Component {

	constructor() {
		super()

		this.state = {
			profile: {}
		}
	}

	componentDidMount() {
		console.log('this.props', this.props);

		console.log('this.props.currentUser.id', this.props.currentUser.id);
		this.getProfileDetails(this.props.currentUser.id)
	}

	// API call to get profile details
	getProfileDetails = async (id) => {
		const url = process.env.REACT_APP_API_URL + 'api/v1/profiles/view/' + id
		console.log('id from getProfileDetails', id);
		try {

			const profileResult = await fetch(url, {
				credentials: 'include',
				method: 'GET',
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
			
		} catch (error) {
			console.error(error)
		}
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