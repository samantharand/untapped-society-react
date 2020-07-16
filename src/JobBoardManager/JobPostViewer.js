import React, { Component } from 'react';
import JobPost from './JobPost';
import JobPostDetail from './JobPostDetail';

export default class JobPostViewer extends Component {
  constructor() {
    super();
    this.state = {
      jobPosts: [],
      selectedJob: -1
    }
  }

  componentDidMount() {
    this.fetchJobs()
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

  // select job
  selectJob = (id) => {
    this.setState({selectedJob: id})
  }
  render() {
    console.log(this.state);
    const { jobPosts, selectedJob } = this.state;
    const JobPostList = jobPosts.map((jobPost, key) => {
      return <JobPost 
      jobPost={jobPost} 
      selectJob={this.selectJob}
      key={key}
      />
    })
    return(
      <React.Fragment>
        {
          selectedJob < 0
          ?
          <ol>{JobPostList}</ol>
          :
          <JobPostDetail jobPost={jobPosts[selectedJob]} currentUser={this.props.currentUser}/>
        }
      </React.Fragment>
    )
  }
}