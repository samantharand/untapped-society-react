import React, { Component } from 'react'
import { Form, Button, Label, Input, Select } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class ProfileUpdate extends Component {
	constructor(props) {
		super()

		this.state = {
			education: props.currentUser.education,
			name: props.currentUser.name,
			date_of_birth: props.currentUser.date_of_birth,
			email: props.currentUser.email,
			location: props.currentUser.location,
			language: props.currentUser.language,
			ethinicity: props.currentUser.ethinicity,
			skillset: props.currentUser.skillset,
			industry: props.currentUser.industry,
			payrange: props.currentUser.payrange,
			photo: props.currentUser.photo
		}
	}

	componentDidMount() {
		console.log(this.props);
	}

	onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // api call
  updateProfile = async (updateInfo) => {
  	const url = process.env.REACT_APP_API_URL + 'api/v1/profiles/update/' + this.props.currentUser.id

  	const updateProfileResponse = await fetch(url, {
				credentials: 'include',
				method: 'PATCH',
				body: JSON.stringify(updateInfo),
				headers: {
					'Content-Type': 'application/json'
				}
  	})

  	const updateProfileJson = await updateProfileResponse.json()
  	console.log('updateProfileJson', updateProfileJson);

  	if(updateProfileJson.status === 200) {
  		this.props.history.push('/profile')
  	}
  }

  // event handler
  onSubmit = async (e) => {
  	e.preventDefault()
  	console.log(this.props.currentUser.id);
  	console.log(this.props.currentUser);

  	try {
	  	
	  	const result = await this.updateProfile({
					education: this.state.education,
					name: this.state.name,
					date_of_birth: this.state.date_of_birth,
					email: this.state.email,
					location: this.state.location,
					language: this.state.language,
					ethinicity: this.state.ethinicity,
					skillset: this.state.skillset,
					industry: this.state.industry,
					payrange: this.state.payrange,
					photo: this.state.photo
	  	})
  		
  	} catch (error) {
  		console.error(error)
  	}

  }

  // cloudinary handler
  handleSelectedFile = async (e) => {
  	const files = e.target.files
  	const data = new FormData()
  	const url = process.env.REACT_APP_CLOUDINARY_API_URL

  	data.append('file', files[0])
  	data.append('upload_preset', 'uptappedsociety')

  	const uploadImageResponse = await fetch(url, {
  		method: 'POST',
  		body: data
  	})

  	const file = await uploadImageResponse.json()

  	await this.setState({
  		photo: file.secure_url
  	})
  }

	render() {

		const { photo, education, name, date_of_birth, email, location, language, ethinicity, skillset, industry, payrange } = this.state
		
		return(
			<div className='ProfileContainer'>
				<div className='ProfileBody'>

					<div className='FormContainer'>
						<Form onSubmit={ this.onSubmit }>
							<p> Photo </p>
							<input
								name='photo'
								type='file'
								onChange={ this.handleSelectedFile }
							/>
							<p>  Name </p>
							<Input 
								placeholder="Name"
								name='name'
								value={ name }
								onChange={ this.onChange }		
							/>
							<p> Education </p>
							<Input 
								placeholder="Education"
								name='education'
								value={ education }
								onChange={ this.onChange }		
							/>
							<p> Email </p>
							<Input 
								placeholder="Email"
								name='email'
								value={ email }
								onChange={ this.onChange }		
							/>
							<p> Location </p>
							<Input 
								placeholder="Location"
								name='location'
								value={ location }
								onChange={ this.onChange }		
							/>
							<p> Language </p>
							<Input 
								placeholder="Language"
								name='language'
								value={ language }
								onChange={ this.onChange }		
							/>
							<p> Skillset </p>
							<Input 
								placeholder="Skillset"
								name='skillset'
								value={ skillset }
								onChange={ this.onChange }		
							/>
							<p> Industry </p>
							<Input 
								placeholder="Industry"
								name='industry'
								value={ industry }
								onChange={ this.onChange }		
							/>
							<p> Payrange </p>
							<Input 
								placeholder="Payrange"
								name='payrange'
								value={ payrange }
								onChange={ this.onChange }		
							/>
							<Button> Save Now </Button>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(ProfileUpdate)