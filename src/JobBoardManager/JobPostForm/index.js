import React, { Component } from 'react';

export default class JobPostForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      functionality: "",
      officeLocation: "",
      jobType: "",
      educationLevel: "",
      careerlevel: "",
      compensation: ""
    }
  }
  // Onchange handler
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { title, description, functionality, 
      officeLocation, jobType, educationLevel,
      careerlevel, compensation } = this.state;
    return (
      <form>
        <label>Job Title</label>
        <input 
        placeholder='Job Title'
        name='title'
        value={title}
        onChange={this.onChange}
        />
        <label>Description</label>
        <input 
        placeholder='Describe this job'
        name='description'
        value={description}
        onChange={this.onChange}
        />
        <label>Function</label>
        <input 
        placeholder='Function'
        name='functionality'
        value={functionality}
        onChange={this.onChange}
        />
        <label>office location</label>
        <input 
        placeholder='office location'
        name='officeLocation'
        value={officeLocation}
        onChange={this.onChange}
        />
        <label>Job Type</label>
        <input 
        placeholder='Job Type'
        name='jobType'
        value={jobType}
        onChange={this.onChange}
        />
        <label>Education Level</label>
        <input 
        placeholder='Education Level'
        name='educationLevel'
        value={educationLevel}
        onChange={this.onChange}
        />
        <label>Career Level</label>
        <input 
        placeholder='Career Level'
        name='careerlevel'
        value={careerlevel}
        onChange={this.onChange}
        />
        <label>Compensation</label>
        <input 
        placeholder='Compensation'
        name='compensation'
        value={compensation}
        onChange={this.onChange}
        />
      
        <button>Create</button>
      </form>
    )
  }
}