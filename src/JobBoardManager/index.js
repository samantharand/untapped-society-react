import React, { Component } from 'react';
import JobPostForm from './JobPostForm';

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
      </React.Fragment>
    )
  }
}