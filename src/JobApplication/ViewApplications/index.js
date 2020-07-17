import React, { Component } from 'react'
import JobPostDetail from '../../JobBoardManager/JobPostDetail'

export default class ViewApplication extends Component {
	// gathers all job applications for a certain job and displays them 

	constructor() {
		super() 

		this.state = {
			jobPosts: []
		}
	}

	componentDidMount() {
		console.log('props in JobApplication',this.props);
		this.getJobs()
	}	


	// api call as soon as page loads
	getJobs = async () => {
		console.log('getJobs');
		const url = process.env.REACT_APP_API_URL + '/api/v1/companies/all'


		try {
			// get all company info
			const getJobsRes = await fetch(url, {
				credentials: 'include'
			})


			if(getJobsRes.status === 200) {
				const getJobsJson = await getJobsRes.json()

				console.log(getJobsRes, getJobsJson);
				// filter out job posts that do NOT belong to that company - associated w crrent user somehow?
				const companies = getJobsJson.data
				const filteredCompanies = await companies.filter(company => company.user.id == this.props.currentUser.id)

				console.log('filteredCompanies[0].id', filteredCompanies[0].id);

				this.getJobPostsByCompany(filteredCompanies[0].id)

				// this.getApplications(1)

				// this.setState({
				// 	companies: filteredCompanies
				// })
			} else {
				console.log("nah man");
			}

		} catch (error) {

			console.error(error)

		}
	}

	getJobPostsByCompany = async (id) => {
		console.log(id);
		const url = process.env.REACT_APP_API_URL + 'api/v1/jobposts/all'

		try {

		// get all jobs posts
			const jobPostsRes = await fetch(url, {
					credentials: 'include'
			})

			console.log(jobPostsRes);

			if(jobPostsRes.status === 200) {
				const jobPostsJson = await jobPostsRes.json()

				console.log(jobPostsJson);
				this.setState({
					jobPosts: jobPostsJson.data
				})
			}
			
		} catch (error) {
			console.error(error)
		}
	}

	// getApplications = async (id) => {
	// 	console.log('get applications id', id);
	// 	try {

	// 		const url = process.env.REACT_APP_API_URL + 'api/v1/jobapplications/all/' + id

	// 		const checkApplicationsRes = await fetch(url, {
	// 			credentials: 'include'
	// 		})

	// 		console.log('checkApplicationsRes', checkApplicationsRes);

	// 		// const checkApplicationsJson = await checkApplicationsRes.json()
	// 		// console.log('checkApplicationsJson', checkApplicationsJson);
	// 		// if(checkApplicationsRes.status === 200) {

	// 		// 	this.setState({
	// 		// 		jobApps: checkApplicationsJson
	// 		// 	})
	// 		// 	this.checkApplications()
	// 		// }
			
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }
	// get all applications on the database from that jobs id -- separate component

	// maps out job applications -- another container specficlaly for them? 
		// accept or deny buttons
		// accept does something
		// deny removes from page

	render() {
		const { jobPosts } = this.state
		const jobPostMap = jobPosts.map((jobPost, key) => {
			return(
				<JobPostDetail jobPost={jobPost} currentUser={ this.props.currentUser }/>
			)
		})
		return(
			<React.Fragment>
				<button onClick={ this.getJobs }> View Application </button>
				{jobPostMap}
			</React.Fragment>
		)
	}

}