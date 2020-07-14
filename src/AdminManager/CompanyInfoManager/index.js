import React, { Component } from 'react';
import CompanyInfoForm from './CompanyInfoForm';
import CompanyInfo from './CompanyInfo';
import SearchCompany from './SearchCompany';
import EditCompanyInfo from './EditCompanyInfo';


export default class CompanyInfoManager extends Component {
  constructor() {
    super();
    this.state = {
      create: false, // true if creating a company
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

  // select company
  selectCompany = async (id) => {
    try {
      await this.getCompanyInfoById(id);
      await this.setState({ companyId: id })
      console.log("successfully get company info");
    } catch (err) {
      console.error(err);
    }
  }

  // toggle edit
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit})
  }

  render() {
    const { companyId, companyInfo, edit } = this.state;
    return (
      <div>
        <SearchCompany selectCompany={this.selectCompany}/>
        {companyId < 0 
          ? <CompanyInfoForm/>
          : (edit 
            ? <EditCompanyInfo 
              companyInfo={companyInfo}
              companyId={companyId}/> 
            : <CompanyInfo 
              toggleEdit={this.toggleEdit}
              companyInfo={companyInfo}/>
            )
        }
      </div>
    )
  }
}