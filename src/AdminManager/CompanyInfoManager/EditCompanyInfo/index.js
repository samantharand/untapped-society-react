import React, { Component } from 'react';
import EmployerInput from './EmployerInput';

export default class CompanyInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.companyInfo.name,
      description: props.companyInfo.description,
      tagline: props.companyInfo.tagline,
      address: props.companyInfo.address,
      industry: props.companyInfo.industry,
      website: props.companyInfo.website,
      linkedin: props.companyInfo.linkedin,
      twitter: props.companyInfo.twitter,
      github: props.companyInfo.github,
      facebook: props.companyInfo.facebook,
      instagram: props.companyInfo.instagram,
      pinterest: props.companyInfo.pinterest,
      youtube: props.companyInfo.youtube,
      employer: props.companyInfo.employer
    };
  }

  // Onchange handler
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // update company info
  update = async (info) => {
    const url = process.env.REACT_APP_API_URL + "api/v1/companies/update/" + this.props.companyId;
    try {
      const res = await fetch(url, {
        credentials: 'include',
        method: "PATCH",
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await res.json();
      return json;
    } catch (err) {
      console.error(err);
    }
  }

  // create handler
  onUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await this.update(this.state);
      console.log(result);
    } catch (err) {
      console.error(err)
    }
  }

  // add employer email to list
  addEmployer = (email) => {
    let { employer } = this.state;
    if (!employer) {
      employer = email;
    } else {
      employer += "," + email;
    }
    this.setState({ employer })
  }

  render() {
    const {
      name, description, tagline, address, industry,
      website, linkedin, twitter, github, facebook,
      instagram, pinterest, youtube, employer
    } = this.state
    const employerList = (employer && employer.split(',').map((email, key) => {
      return (
        <li key={key}>{email}</li>
      )
    }))
    return (
      <form onSubmit={this.onUpdate}>
        <label>Company name</label>
        <input 
        placeholder='Company name'
        name='name'
        value={name}
        onChange={this.onChange}
        />
        <label>Description</label>
        <input 
        placeholder='Describe your company'
        name='description'
        value={description}
        onChange={this.onChange}
        />
        <label>Tagline</label>
        <input 
        placeholder='tagline'
        name='tagline'
        value={tagline}
        onChange={this.onChange}
        />
        <label>Address</label>
        <input 
        placeholder='Address'
        name='address'
        value={address}
        onChange={this.onChange}
        />
        <label>Website</label>
        <input 
        placeholder='Website'
        name='website'
        value={website}
        onChange={this.onChange}
        />
        <label>linkedIn</label>
        <input 
        placeholder='LinkedIn'
        name='linkedin'
        value={linkedin}
        onChange={this.onChange}
        />
        <label>Twitter</label>
        <input 
        placeholder='Twitter'
        name='twitter'
        value={twitter}
        onChange={this.onChange}
        />
        <label>Github</label>
        <input 
        placeholder='Github'
        name='github'
        value={github}
        onChange={this.onChange}
        />
        <label>Facebook</label>
        <input 
        placeholder='Facebook'
        name='facebook'
        value={facebook}
        onChange={this.onChange}
        />
        <label>Instagram</label>
        <input 
        placeholder='Instagram'
        name='instagram'
        value={instagram}
        onChange={this.onChange}
        />
        <label>Pinterest</label>
        <input 
        placeholder='Pinterest'
        name='pinterest'
        value={pinterest}
        onChange={this.onChange}
        />
        <label>Youtube</label>
        <input 
        placeholder='Youtube'
        name='youtube'
        value={youtube}
        onChange={this.onChange}
        />
        <label>Employer List</label>
        <ol>{employerList}</ol>
        <EmployerInput addEmployer={this.addEmployer}/>
        <button>Update</button>
      </form>
    )
  }
}