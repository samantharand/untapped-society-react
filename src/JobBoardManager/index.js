import React, { Component } from 'react';
import JobPostForm from './JobPostForm';

export default class JobBoardManager extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  // api call to create new job post
  createJobPost = async (info) => {
    try {
      const url = process.env.REACT_APP_API_URL + "api/v1/jobposts/create";
      const res = await fetch(url, {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await res.json();
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <React.Fragment>
        <JobPostForm createJobPost={this.createJobPost}/>
      </React.Fragment>
    )
  }
}