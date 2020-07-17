import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Button, Label, Input } from 'semantic-ui-react'
import '../../Auth/Auth.css'

class ProfileCreate extends Component {
	constructor() {
		super()

		this.state = {
			eduction: '',
			name: '',
			date_of_birth: '',
			email: '',
			location: '',
			language: '',
			ethinicity: '',
			skillset: '',
			industry: '',
			payrange: '',
			photo: ''
		}
	}

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // API call
  submitProfile = async (profileInfo) => {
  	const url = process.env.REACT_APP_API_URL + 'api/v1/profiles/create'

  	const submitProfileResponse = await fetch(url, {
	    credentials: 'include',
	    method: "POST",
	    body: JSON.stringify(profileInfo),
	    headers: {
	      'Content-Type': 'application/json'
	    }
  	})

  	console.log('submitProfileResponse', submitProfileResponse);

  	const submitProfileJson = await submitProfileResponse.json()

  	if(submitProfileJson.status === 200) {
  		this.props.history.push('/profile')
  	}

  	console.log('submitProfileJson', submitProfileJson);
  	console.log('url :)', url);

  	if(submitProfileJson.status === 201) {
  		this.props.history.push('/profile')
  	}
  }

  // event handler
  onSubmit = async (e) => {
  	e.preventDefault()

  	try {
  		const result = await this.submitProfile({
				education: this.state.eduction,
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
		const { education, name, date_of_birth, email, location, language, ethinicity, skillset, industry, payrange } = this.state
		
		return (
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

export default withRouter(ProfileCreate)