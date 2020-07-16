import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'
import { withRouter } from "react-router-dom"
import '../User.css'

class Profile extends Component {

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
			<div  className='UserProfileContainer'>
				<h1> Welcome, {profile.name} </h1>
				<div className='BasicInfoContainer'>
					<Segment className='UserProfilePhotoContainer'>
						<img src={ profile.photo } />
					</Segment>
					<Segment className='PersonalInfoContainer'>
						<p> name: {profile.name} </p>
						<p> email: {profile.email} </p>
						<p> PHONE </p>
						<p> JOB TITLE </p>
					</Segment>
					<Segment className='YourDetails'>
						<p> education: {profile.education} </p>
						<p> INCOME </p>
						<p> location: {profile.location} </p>
						<p> skillset: {profile.skillset} </p>
					</Segment>
					<Button 
						className='EditButton'
						onClick={ () => this.props.history.push('/profile/update') }
					> Edit Info </Button>
					<this.props.Link to='/profile/update'> edit profile </this.props.Link>
				</div>
				<Segment>
					<h4> maybe dont show this stuff? idk! </h4>
					<p> DOB: {profile.date_of_birth} </p>
					<p> ethinicity: {profile.ethinicity} </p>
					<p> industry: {profile.industry} </p>
					<p> language: {profile.language} </p>
					<p> payrange: {profile.payrange} </p>
				</Segment>
			</div>
		)
	}
}

export default withRouter(Profile)