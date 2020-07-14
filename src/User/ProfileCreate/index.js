import React, { Component } from 'react'

export default class ProfileCreate extends Component {
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
			payrange: '' 
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

  	console.log('submitProfileJson', submitProfileJson);
  	console.log('url :)', url);
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
				payrange: this.state.payrange 
  		})
  	} catch (error) {
  		console.error(error)
  	}
  }

	render() {
		const { education, name, date_of_birth, email, location, language, ethinicity, skillset, industry, payrange } = this.state
		
		return (
			<React.Fragment>
				<form onSubmit={ this.onSubmit }>
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