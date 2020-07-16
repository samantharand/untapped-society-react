import React, { Component } from 'react';
import { 
  Form, Dropdown, TextArea, Input,
  Divider
} from 'semantic-ui-react';

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
      youtube: "",
      photo: ""
    }
  }

  // Onchange handler
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // create company info
  create = async (info) => {
    const url = process.env.REACT_APP_API_URL + "api/v1/companies/create";
    try {
      const res = await fetch(url, {
        credentials: 'include',
        method: "POST",
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
  onCreate = async (e) => {
    e.preventDefault();
    try {
      const result = await this.create(this.state);
      console.log(result);
    } catch (err) {
      console.error(err)
    }
  }

  // cloudinary handler
  handleSelectedFile = async (e) => {
    const files = e.target.files
    const data = new FormData()
    const url = process.env.REACT_APP_CLOUDINARY_API_URL

    data.append('file', files[0])
    data.append('upload_preset', 'uptappedsociety')

    const uploadImageResponse = await fetch(url, {
      method: 'POST',
      body: data
    })

    const file = await uploadImageResponse.json()

    await this.setState({
      photo: file.secure_url
    })
  }

  render() {
    const {
      name, description, tagline, address, industry,
      website, linkedin, twitter, github, facebook,
      instagram, pinterest, youtube
    } = this.state
    return (
      <Form onSubmit={this.onCreate}>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>LOGO</label>
            <input
            name='photo'
            type='file'
            onChange={ this.handleSelectedFile }
            />
          </Form.Field>
          <Form.Input
            label="NAME"
            placeholder='Company Name'
            name='name'
            value={name}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Field>
          <label>TAGLINE</label>
          <input 
          placeholder='keep it short and simple'
          name='tagline'
          value={tagline}
          onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label>DESCRIPTION</label>
          <TextArea 
          placeholder='What do you do and how do you do it'
          name='description'
          value={description}
          onChange={this.onChange}
          />
        </Form.Field>
        <Divider />
        <strong>Meta Data</strong>
        <p>Clearing these value could result in your company not appearing correctly in searches, match results and best companies lists.</p>
        <Form.Group widths='equal'>
          <Form.Input
            label="LOCATION"
            placeholder="City or zip"
            value={address}
            onChange={this.onChange}
            name='address'
          />
          <Form.Field
            label="COMPANY TYPE"
            control={Input}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label="INDUSTRY"
            placeholder="Industry"
            value={industry}
            onChange={this.onChange}
            name='industry'
          />
          <Form.Field
            label="SIZE"
            control={Input}
          />
        </Form.Group>
        <Divider />
        <strong>URLs</strong>
        <p>Where can Untapped Society users find you?</p>
        <Form.Group widths='equal'>
          <Form.Input
            label="WEBSITE"
            placeholder='URL'
            name='website'
            value={website}
            onChange={this.onChange}
          />
          <Form.Input
            label="LINKEDIN"
            placeholder='URL'
            name='linkedin'
            value={linkedin}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label="TWITTER"
            placeholder='URL'
            name='twitter'
            value={twitter}
            onChange={this.onChange}
          />
          <Form.Input
            label="Github"
            placeholder='URL'
            name='github'
            value={github}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label="FACEBOOK"
            placeholder='URL'
            name='facebook'
            value={facebook}
            onChange={this.onChange}
          />
          <Form.Input
            label="INSTAGRAM"
            placeholder='URL'
            name='instagram'
            value={instagram}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label="PINTEREST"
            placeholder='URL'
            name='pinterest'
            value={pinterest}
            onChange={this.onChange}
          />
          <Form.Input
            label="YOUTUBE"
            placeholder='URL'
            name='youtube'
            value={youtube}
            onChange={this.onChange}
          />
        </Form.Group>
        <Divider />
        <div style={{textAlign: "center"}}>
          <input type="checkbox" name="public"/>
          <label for="public">Make this information visible on your company profile</label>
          <Form.Button>Save Now</Form.Button>
        </div>
      </Form>
    )
  }
}