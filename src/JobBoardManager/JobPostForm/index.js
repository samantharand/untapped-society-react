import React, { Component } from 'react';
import SearchCompany from './SearchCompany';
import { Form } from 'semantic-ui-react';

export default class JobPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      functionality: "",
      officeLocation: "",
      jobType: "",
      educationLevel: "",
      careerLevel: "",
      compensation: "",
      company: props.companyInfo.id
    }
  }
  // Onchange handler
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  // on select
  onSelect = (e, { value }) => {
    this.setState({ jobType: value })
  }
  // select company 
  selectCompany = (id) => {
    this.setState({company: id})
  }

  // Submit handler
  onSubmit = async (e) => {
    e.preventDefault();
    const { title, description, functionality, 
      officeLocation, jobType, educationLevel,
      careerLevel, compensation, company } = this.state;
    try {
      await this.props.createJobPost({
        company: company,
        title: title,
        description: description,
        function: functionality,
        officelocation: officeLocation,
        jobtype: jobType,
        educationlevel: educationLevel,
        careerlevel: careerLevel,
        compensation: compensation
      });
      console.log('onsubmit');
      this.props.toggleCreate();
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    console.log(this.state)
    const { title, description, functionality, 
      officeLocation, jobType, educationLevel,
      careerLevel, compensation } = this.state;
    const divStyle = {
      margin: "10px 200px"
    }
    const jobTypeOption = [
    {
      key: "Full Time",
      text: "Full Time",
      value: "Full Time"
    },
    {
      key: "Part Time",
      text: "Part Time",
      value: "Part Time"
    },
    {
      key: "Contract",
      text: "Contract",
      value: "Contract"
    },
    {
      key: "Internship",
      text: "Internship",
      value: "Internship"
    },
    ]
    return (
      <div style={divStyle}>
        <h2>Job Details</h2>
        <p>provide details for this job</p>
        <Form onSubmit={this.onSubmit}>
          <Form.Input
          label="JOB TITLE" 
          placeholder='UX Designer, Software Engineer, etc'
          name='title'
          value={title}
          onChange={this.onChange}
          />
          <Form.TextArea 
          label="JOB DESCRIPTION"
          placeholder='Describe this job'
          name='description'
          value={description}
          onChange={this.onChange}
          />
          <Form.Input
          label="LOCATION" 
          placeholder='City, State, or remote'
          name='officeLocation'
          value={officeLocation}
          onChange={this.onChange}
          />
          <Form.Group widths='equal'>
            <Form.Input
            label="FUNCTION"
            placeholder='Main functionality of the job'
            name='functionality'
            value={functionality}
            onChange={this.onChange}
            />
            <Form.Dropdown 
            label="JOB TYPE"
            placeholder='Choose one'
            options={jobTypeOption}
            name='jobType'
            selection
            value={jobType}
            onChange={this.onSelect}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
            label="EDUCATION (optional)"
            placeholder='College, High School, etc...'
            name='educationLevel'
            value={educationLevel}
            onChange={this.onChange}
            />
            <Form.Input
            label="CAREER LEVEL (optional)" 
            placeholder='Experienced, Entry-Level, etc...'
            name='careerLevel'
            value={careerLevel}
            onChange={this.onChange}
            />
          </Form.Group>
          <Form.Input
          label="COMPENSATION (optional)"
          placeholder='Compensation'
          name='compensation'
          value={compensation}
          onChange={this.onChange}
          />
        
          <Form.Button>Create Job</Form.Button>
        </Form>
      </div>
    )
  }
}