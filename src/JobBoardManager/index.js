import React, { Component } from 'react';
import JobPostForm from './JobPostForm';
import JobApplication from '../JobApplication';
import ViewApplication from '../JobApplication/ViewApplications';

export default class JobBoardManager extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <JobPostForm/>
        <JobApplication currentUser={this.props.currentUser}/>
        <ViewApplication />
      </React.Fragment>
    )
  }
}