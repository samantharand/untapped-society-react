import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

export default class Profile extends Component {

	constructor() {
		super()

		this.state = {
			profile: {}
		}
	}

	componentDidMount() {
		console.log('this.props in user prof', this.props);

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

			this.props.setCurrentUserProfile(profileJson)
			
		} catch (error) {
			console.error(error)
		}
	}

	render() {
		const { profile } = this.state

		return (
			<React.Fragment>
				<h3> profile </h3>
				<Segment>
					<img className='UserProfilePhoto' src={ profile.photo } />
				</Segment>
				<Segment className='PersonalInfoContainer'>
					( name
					email
					phone
					job title )
					

					here
				</Segment>
				<Segment className='Your Details'>
					<p> education: {profile.education} </p>
					<p> INCOME </p>
					<p> location: {profile.location} </p>
					<p> skillset: {profile.skillset} </p>
				</Segment>
				<Segment>
					<p> {profile.date_of_birth} </p>
					<p> {profile.email} </p>
					<p> {profile.ethinicity} </p>
					<p> {profile.industry} </p>
					<p> {profile.language} </p>
					<p> {profile.name} </p>
					<p> {profile.payrange} </p>
				</Segment>
			</React.Fragment>
		)
	}

}