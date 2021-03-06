import React, { Component } from 'react';
import JobPost from './JobPost';
import JobPostDetail from './JobPostDetail';
import { Grid } from 'semantic-ui-react';
import JobApplication from '../JobApplication';

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
    console.log('state in JobPostViewer', this.state);
    console.log('props in JobPostViewer', this.props);
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
      return (
        <div>
          <JobPost 
            jobPost={jobPost} 
            selectJob={this.selectJob}
            key={key}
          />
          <JobApplication currentUser={this.props.currentUser} jobPost={jobPost} jobPost={jobPost}/>
        </div>
        )
    })
    const JobGrid = () => {
      return (
        <Grid padded>
          {JobPostList}
        </Grid>
      )
    }

    return(
      <div style={{
        background: "#F5E7E1",
        borderRadius: "10px",
        margin: "auto 100px"
      }}>
        <h4>Job Post</h4>
        {
          selectedJob < 0
          ?
          <JobGrid/>
          :
          <JobPostDetail jobPost={jobPosts[selectedJob]} currentUser={this.props.currentUser}/>
        }
      </div>
    )
  }
}