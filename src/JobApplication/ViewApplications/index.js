import React, { Component } from 'react'

export default class ViewApplication extends Component {
	// gathers all job applications for a certain job and displays them 

	constructor() {
		super() 

		this.state = {
			jobApps: []
		}
	}

	componentDidMount() {
		console.log('props in JobApplication',this.props);
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

			const getJobsJson = await getJobsRes.json()

			console.log(getJobsRes, getJobsJson);
			// filter out job posts that do NOT belong to that company - associated w crrent user somehow?
			const companies = getJobsJson.data
			const filteredCompanies = await companies.filter(company => company.user.id == this.props.currentUser.id)

			console.log('filteredCompanies', filteredCompanies);

		} catch (error) {

			console.error(error)

		}
	}
				// get all applications on the database from that jobs id -- separate component

	// maps out job applications -- another container specficlaly for them? 
		// accept or deny buttons
		// accept does something
		// deny removes from page


	render() {
		return(
			<button onClick={ this.getJobs }> View Application </button>
		)
	}

}