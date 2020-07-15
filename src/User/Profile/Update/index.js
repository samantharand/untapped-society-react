import React, { Component } from 'react'

export default class ProfileUpdate extends Component {
	constructor(props) {
		super()

		this.state = {
			eduction: props.currentUser.eduction,
			name: props.currentUser.name,
			date_of_birth: props.currentUser.date_of_birth,
			email: props.currentUser.email,
			location: props.currentUser.location,
			language: props.currentUser.language,
			ethinicity: props.currentUser.ethinicity,
			skillset: props.currentUser.skillset,
			industry: props.currentUser.industry,
			payrange: props.currentUser.payrange 
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
  }

  // event handler
  onSubmit = async (e) => {
  	e.preventDefault()
  	console.log(this.props.currentUser.id);
  	console.log(this.props.currentUser);

  	try {
	  	
	  	const result = await this.updateProfile({
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
		
		return(
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
					<select name='payrange' value={ payrange }>
						<option value={ payrange }> 1-10 </option>
						<option value={ payrange }> 11-20 </option>
						<option value={ payrange }> 21-30 </option>
					</select>
					<button> Save Now </button>
				</form>
				<p> Skip this step </p>
			</React.Fragment>
		)
	}
}