import React, { Component } from 'react';
import CompanyInfo from './CompanyInfo';
import JobPostForm from '../JobBoardManager/JobPostForm';

export default class EmployerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      companyInfo: null,
      createNewJob: false
    }
  }
  // api call to get company info by id
  getCompanyInfoById = async (id) => {
    const url = process.env.REACT_APP_API_URL + "api/v1/companies/" + id;
    try {
      const res = await fetch(url,{
        credentials: 'include',
        method: "GET"
      });
      const json = await res.json();
      console.log(json.data.company)
      await this.setState({companyInfo: json.data.company})
      return json.data.company;
    } catch (err) {
      console.error(err)
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
      const id = this.props.currentUser.company;
      await this.getCompanyInfoById(id);
      console.log('json', json)
    } catch (err) {
      console.error(err)
    }
  }
  componentDidMount = async () => {
    try {
      if (this.props.currentUser == null) {
        await this.props.history.push('/')
      } else {
        const id = this.props.currentUser.company;
        await this.getCompanyInfoById(id);
      }
    } catch (err) {
      console.error(err)
    }
  }
  toggleCreate = () => {
    this.setState({ createNewJob: !this.state.createNewJob });
  }
  render() {
    const { companyInfo, createNewJob } = this.state;
    console.log(companyInfo)
    return (
      <React.Fragment>
        {
          createNewJob
          ?
          <JobPostForm 
          createJobPost={this.createJobPost} 
          companyInfo={companyInfo}
          toggleCreate={this.toggleCreate}
          />
          :
          companyInfo && <CompanyInfo companyInfo={companyInfo} toggleCreate={this.toggleCreate}/>
        }
      </React.Fragment>
    )
  }
}