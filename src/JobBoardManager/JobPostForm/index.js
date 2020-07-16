import React, { Component } from 'react';
import SearchCompany from './SearchCompany';

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
      careerLevel: "",
      compensation: "",
      company: ""
    }
  }
  // Onchange handler
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // select company 
  selectCompany = (id) => {
    this.setState({company: id})
  }

  // Submit handler
  onSubmit = async (e) => {
    e.preventDefault();
    try {
      await this.props.createJobPost(this.state);
      console.log('onsubmit');
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { title, description, functionality, 
      officeLocation, jobType, educationLevel,
      careerLevel, compensation } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Job Title</label>
        <input 
        placeholder='Job Title'
        name='title'
        value={title}
        onChange={this.onChange}
        />
        <SearchCompany 
        name='company'
        selectCompany={this.selectCompany}
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
        name='careerLevel'
        value={careerLevel}
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