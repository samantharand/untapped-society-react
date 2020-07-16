import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class JobApplication extends Component {
	// button that allows user to apply for jobs
	// pass current user in via props

	componentDidMount() {
		console.log('props in JobApplication',this.props);
	}


	// API call
	applyForJob = async (applicationInfo) => {
		console.log('applicationInfo', applicationInfo);
		const jobPostId = applicationInfo.position
		console.log('jobPostId', jobPostId);
		const url = process.env.REACT_APP_API_URL + "api/v1/jobapplications/" + jobPostId + "/create/"
		console.log('url', url);

		const applyForJobRes = await fetch(url, {
	    credentials: 'include',
	    method: "POST",
	    body: JSON.stringify(applicationInfo),
	    headers: {
	      'Content-Type': 'application/json'
	    }
		})

		console.log('applyForJobRes', applyForJobRes);

		const applyForJobJson = await applyForJobRes.json()

		console.log('applyForJobJson', applyForJobJson);
	}

	// event handler
	onApply = async (e) => {
		e.preventDefault()

		try {
			
			const result = await this.applyForJob({
				position: this.props.jobPost.id,
				jobseeker: this.props.currentUser.id
			})

		} catch (error) {
			console.error(error)
		}
	}

	render() {
		return(
			<Button onClick={ this.onApply }> Apply to Job </Button>
		)
	}
}