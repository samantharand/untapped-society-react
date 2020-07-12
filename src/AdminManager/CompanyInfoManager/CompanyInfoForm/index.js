import React, { Component } from 'react';

export default class CompanyInfoForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      tagline: "",
      address: "",
      industry: "",
      website: "",
      linkedin: "",
      twitter: "",
      github: "",
      facebook: "",
      instagram: "",
      pinterest: "",
      youtube: ""
    }
  }

  // Onchange handler
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const {
      name, description, tagline, address, industry,
      website, linkedin, twitter, github, facebook,
      instagram, pinterest, youtube
    } = this.state
    return (
      <form>
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
      </form>
    )
  }
}