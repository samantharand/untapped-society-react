import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import JobApplication from './JobApplication'

class JobApplicationContainer extends Component {

	constructor() {
		super()

		this.state = {
			jobApps: []
		}
	}

	componentDidMount() {
		console.log('hi hi');
		console.log('this.props.location.state.jobPost', this.props.location.state.jobPost);

		this.getApplications()
	}

	getApplications = async () => {
		try {

			const url = process.env.REACT_APP_API_URL + 'api/v1/jobapplications/all/' + this.props.location.state.jobPost

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
			}
			
		} catch (error) {
			console.error(error)
		}
	}


	render() {
		// if(this.state.jobPostId !== null) {
		// 	// this.getApplications(
		// 	console.log('hi');
		// }
		const { jobApps } = this.state
		console.log('jobApps in render', jobApps);

		const jobAppMap = jobApps.map(jobApp => {
			return (
				<JobApplication jobApp={jobApp}/>
			)
		})

		console.log(jobAppMap);

		return (
			<>
				{ jobAppMap }
			</>

		)

	}
}

export default withRouter(JobApplicationContainer)