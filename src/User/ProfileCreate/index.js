import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

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
  		// this.props.history.push('/home')
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


  	console.log('handleSelectedFile');
  	console.log('e', e);
  	console.log('e.target', e.target);
  	console.log('e.target.files', e.target.files);
  	console.log('url', url);
  	console.log('files', files);
  	console.log('files[0]', files[0]);
  	console.log('data', data);


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
			<React.Fragment>
				<form onSubmit={ this.onSubmit }>
					<label> photo </label>
					<input
						name='photo'
						type='file'
						onChange={ this.handleSelectedFile }
					/>
					<label> Education </label>
					<input 
						placeholder="Education"
						name='education'
						value={ education }
						onChange={ this.onChange }		
					/>
					<label>  Name </label>
					<input 
						placeholder="Name"
						name='name'
						value={ name }
						onChange={ this.onChange }		
					/>
					<label> Date of Birth </label>
					<input 
						placeholder="Date of Birth"
						name='date_of_birth'
						type='date'
						value={ date_of_birth }
						onChange={ this.onChange }		
					/>
					<label> Email </label>
					<input 
						placeholder="Email"
						name='email'
						value={ email }
						onChange={ this.onChange }		
					/>
					<label> location </label>
					<input 
						placeholder="location"
						name='location'
						value={ location }
						onChange={ this.onChange }		
					/>
					<label> language </label>
					<input 
						placeholder="language"
						name='language'
						value={ language }
						onChange={ this.onChange }		
					/>
					<label> ethinicity </label>
					<input 
						placeholder="ethinicity"
						name='ethinicity'
						value={ ethinicity }
						onChange={ this.onChange }		
					/>
					<label> skillset </label>
					<input 
						placeholder="skillset"
						name='skillset'
						value={ skillset }
						onChange={ this.onChange }		
					/>
					<label> industry </label>
					<input 
						placeholder="industry"
						name='industry'
						value={ industry }
						onChange={ this.onChange }		
					/>
					<label> payrange </label>
					<input 
						placeholder="payrange"
						name='payrange'
						value={ payrange }
						onChange={ this.onChange }		
					/>
					<button> Save Now </button>
				</form>
				<p> Skip this step </p>
			</React.Fragment>
		)
	}
}

export default withRouter(ProfileCreate)