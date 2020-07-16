import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import './JobApplication.css'

export default class JobApplication extends Component {
	// button that allows user to apply for jobs
	// pass current user in via props
	constructor() {
		super()

		this.state = {
			jobApps: [],
			appliedFor: false
		}
	}

	componentDidMount() {
		console.log('props in JobApplication',this.props);
		this.getApplications()
	}

	// fetch job apps to check if user has applied
	getApplications = async () => {
		'getApplications called'
		try {

			const url = process.env.REACT_APP_API_URL + 'api/v1/jobapplications/all/' + this.props.jobPost.id

			const checkApplicationsRes = await fetch(url, {
				credentials: 'include'
			})

			console.log('checkApplicationsRes', checkApplicationsRes);

			const checkApplicationsJson = await checkApplicationsRes.json()
			console.log('checkApplicationsJson', checkApplicationsJson);
			if(checkApplicationsRes.status === 200) {

				this.setState({
					jobApps: checkApplicationsJson
				})
				this.checkApplications()
			}
			
		} catch (error) {
			console.error(error)
		}
	}

	checkApplications = () => {
		
		const jobs = this.state.jobApps

		for(let i = 0; i < jobs.length; i++ ) {
			if(jobs[i].jobseeker.id === this.props.currentUser.id) {
				console.log('yas')
				this.setState({
					appliedFor: true
				})
			} 
		}
	}


	// API call
	applyForJob = async (applicationInfo) => {
		console.log('applicationInfo', applicationInfo);
		const jobPostId = applicationInfo.position.id
		console.log('jobPostId', jobPostId);

		const url = process.env.REACT_APP_API_URL + 'api/v1/jobapplications/' + jobPostId + "/create"
		
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

		if(applyForJobRes.status === 200) {
			this.getApplications()
		}

		console.log('applyForJobJson', applyForJobJson);
	}

	// event handler
	onApply = async (e) => {
		e.preventDefault()

		try {
			
			const result = await this.applyForJob({
				position: this.props.jobPost,
				jobseeker: this.props.currentUser
			})


		} catch (error) {
			console.error(error)
		}
	}

	render() {
		return(
			<div>
				{
				this.state.appliedFor
				?
				<Button disabled> Applied! </Button>
				:
				<Button onClick={ this.onApply }> Apply to Job </Button>
				}
			</div>
		)
	}
}