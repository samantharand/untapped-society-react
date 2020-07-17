import React, { Component } from 'react';
import CompanyInfo from './CompanyInfo';

export default class EmployerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      companyInfo: null
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

  componentDidMount = async () => {
    const id = this.props.currentUser.company;
    try {
      await this.getCompanyInfoById(id);
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <React.Fragment>
        {this.state.companyInfo && <CompanyInfo companyInfo={this.state.companyInfo}/>}
      </React.Fragment>
    )
  }
}