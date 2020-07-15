import React, { Component } from 'react';

export default class JobPostViewer extends Component {
  constructor() {
    super();
    this.state = {
      jobPosts: []
    }
  }

  // api call to fetch all job posts
  fetchJobs = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "api/v1/jobposts/all";
      const res = await fetch(url, {
        credentials: 'include'
      })
      const json = await res.json();
      this.setState({jobPosts: json.data})
    } catch (err) {
      console.error(err)
    }
  }

  async componentDidMount() {
    await this.fetchJobs();
  }

  render() {
    console.log(this.state);
    return(
      <h2>Job viewer</h2>
    )
  }
}