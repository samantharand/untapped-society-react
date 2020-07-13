import React, { Component } from 'react';
import CompanyInfoForm from './CompanyInfoForm';
import CompanyInfo from './CompanyInfo';



export default class CompanyInfoManager extends Component {
  constructor() {
    super();
    this.state = {
      edit: false, // true if editing a company
      companyId: -1, // the company id
      companyInfo: {}
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

  render() {
    this.getCompanyInfoById(1);
    const { companyInfo } = this.state
    return (
      <div>
        <h1>First function will be looking up company?</h1>
        <h1>Second function will be adding company</h1>
        <h1>Third function will be delete company info</h1>
        <h1>Lastly will be able to update company info</h1>
        <CompanyInfoForm/>
        <CompanyInfo companyInfo={companyInfo}/>
      </div>
    )
  }
}