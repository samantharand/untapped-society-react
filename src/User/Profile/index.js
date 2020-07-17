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

		// console.log('this.props.currentUser.id', this.props.currentUser.id);
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
						<p> {profile.name} </p>
						<p> {profile.email} </p>
						<p> {profile.language} </p>
						<p> {profile.industry} </p>
					</Segment>
					<Segment className='YourDetails'>
						<p> {profile.education} </p>
						<p> {profile.payrange} </p>
						<p> {profile.location} </p>
						<p> {profile.skillset} </p>
					</Segment>
					<Button 
						className='EditButton'
						onClick={ () => this.props.history.push('/profile/update') }
					> Edit Info </Button>
				</div>
				<Segment className='DetailContainer'>
					<Segment className='JobApplicationDetails'> 
						<div> <h3> Job Applications </h3> </div>
						<div> <h4> Saved Jobs </h4> </div>
						<Segment className='About'> 
							<strong> General Assembly </strong>
							<p> UI/UX Designer </p>
						</Segment>
						<Segment className='About'> 
							<strong> Detective App </strong>
							<p> UI/UX Designer </p>
						</Segment>
						<div> <h4> Applied Jobs </h4> </div>
						<Segment className='About'> 
							<strong> Slack </strong>
							<p> UI/UX Designer </p>
						</Segment>
						<Segment className='About'> 
							<strong> Figma </strong>
							<p> UI/UX Designer </p>
						</Segment>
					</Segment>
					<div className='AboutAndExp'>
						<h2> About </h2>
						<Segment className='About'> 
							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim amet neque amet molestie tortor lectus. Elementum, vulputate potenti orci donec ultrices praesent. Velit pharetra dignissim etiam cras. Tempor augue hendrerit aliquam platea senectus lobortis curabitur risus. Volutpat elit facilisis proin eget vestibulum egestas. Lectus egestas cras enim mi eget. Ut amet id duis turpis enim in vitae aliquam et. Lectus pellentesque leo suspendisse leo, sem lacinia volutpat netus auctor. Fringilla mattis sed ligula pellentesque sit tempus aenean nunc. Nec, ut morbi feugiat mattis nibh. Curabitur cursus tempor, nulla urna nibh. Risus nam aliquam, purus tellus sit justo, id. Mauris, mi, vestibulum a a, duis purus a, lorem. Facilisi amet, vel cras enim cum iaculis sagittis. Tellus egestas senectus imperdiet ut. Urna risus commodo mattis vestibulum duis dolor tempor. Enim tellus diam, urna viverra. Aenean amet ornare diam ut est sit hendrerit vestibulum. Massa netus magnis sed porta vitae accumsan aliquam, sed. Posuere pharetra tempor porttitor purus sagittis nisl, egestas. Cursus aenean netus aliquet risus. Vitae cursus amet, volutpat nec a. Orci duis est, amet diam. Accumsan ornare vestibulum, amet sed ut ac. </p>
						</Segment>
						<h2> Experience </h2>
						<Segment className='About'> 
							<strong> Job Title </strong>
							<p> Company </p>
							<p> Start Date - End Date </p>
							<p> Location </p>

							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim amet neque amet molestie tortor lectus. Elementum, vulputate potenti orci donec ultrices praesent. Velit pharetra dignissim etiam cras. Tempor augue hendrerit aliquam platea senectus lobortis curabitur risus. Volutpat elit facilisis proin eget vestibulum egestas. </p>
						</Segment>
						<Segment className='About'> 
							<strong> Job Title </strong>
							<p> Company </p>
							<p> Start Date - End Date </p>
							<p> Location </p>

							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim amet neque amet molestie tortor lectus. Elementum, vulputate potenti orci donec ultrices praesent. Velit pharetra dignissim etiam cras. Tempor augue hendrerit aliquam platea senectus lobortis curabitur risus. Volutpat elit facilisis proin eget vestibulum egestas. </p>
						</Segment>
						<Segment className='About'> 
							<strong> Job Title </strong>
							<p> Company </p>
							<p> Start Date - End Date </p>
							<p> Location </p>

							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim amet neque amet molestie tortor lectus. Elementum, vulputate potenti orci donec ultrices praesent. Velit pharetra dignissim etiam cras. Tempor augue hendrerit aliquam platea senectus lobortis curabitur risus. Volutpat elit facilisis proin eget vestibulum egestas. </p>
						</Segment>
					</div>

				</Segment>
			</div>
			
		)
	}
}

export default withRouter(Profile)