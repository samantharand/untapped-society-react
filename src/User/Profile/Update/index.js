import React, { Component } from 'react'
import { Form, Button, Label, Input, Select } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class ProfileUpdate extends Component {
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

		const { photo, education, name, date_of_birth, email, location, language, ethinicity, skillset, industry, payrange } = this.state
		
		return(
			<div className='UpdateProfileContainer'>
				<Form onSubmit={ this.onSubmit }>
					<label> photo </label>
					<input
						name='photo'
						type='file'
						onChange={ this.handleSelectedFile }
					/>
					<Label> Education </Label>
					<Input 
						placeholder="Education"
						name='education'
						value={ education }
						onChange={ this.onChange }		
					/>
					<Label>  Name </Label>
					<Input 
						placeholder="Name"
						name='name'
						value={ name }
						onChange={ this.onChange }		
					/>
					<Label> Date of Birth </Label>
					<Input 
						placeholder="Date of Birth"
						name='date_of_birth'
						type='date'
						value={ date_of_birth }
						onChange={ this.onChange }		
					/>
					<Label> Email </Label>
					<Input 
						placeholder="Email"
						name='email'
						value={ email }
						onChange={ this.onChange }		
					/>
					<Label> location </Label>
					<Input 
						placeholder="location"
						name='location'
						value={ location }
						onChange={ this.onChange }		
					/>
					<Label> language </Label>
					<Input 
						placeholder="language"
						name='language'
						value={ language }
						onChange={ this.onChange }		
					/>
					<Label> ethinicity </Label>
					<Input 
						placeholder="ethinicity"
						name='ethinicity'
						value={ ethinicity }
						onChange={ this.onChange }		
					/>
					<Label> skillset </Label>
					<Input 
						placeholder="skillset"
						name='skillset'
						value={ skillset }
						onChange={ this.onChange }		
					/>
					<Label> industry </Label>
					<Input 
						placeholder="industry"
						name='industry'
						value={ industry }
						onChange={ this.onChange }		
					/>
					<Label> payrange </Label>
					<select 
						name='payrange' 
						value={ payrange }
						placeholder='Select Payrange'
						>
						<option value={ payrange }> 1-10 </option>
						<option value={ payrange }> 11-20 </option>
						<option value={ payrange }> 21-30 </option>
					</select>
					<Button> Save Now </Button>
				</Form>
				<p> Skip this step </p>
			</div>
		)
	}
}

export default withRouter(ProfileUpdate)