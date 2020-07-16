import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';

export default function CompanyInfo(props) {
  const {
    name, description, tagline, address, industry,
    website, linkedin, github, twitter,
    facebook, instagram, pinterest, youtube, photo
  } = props.companyInfo;
  const outline = {
    border: "1px solid #E47472",
    borderRadius: "10px"
  }
  const colored = {
    background: "#F5E7E1",
    borderRadius: "10px"
  };
  const titleStyle = {
    textAlign: "center",
    color: "#E47472"
  }
  return (
    <React.Fragment>
      <Button onClick={props.toggleEdit}>edit</Button>
      <Grid>
        <Grid.Column width={4}>
          <Grid.Row style={titleStyle}>
            <div style={colored}>
              <Image src={photo} circular small/>
              <strong>Welcome!</strong>
              <p>{name}</p>
            </div>
          </Grid.Row>
          <Grid.Row>
            <p style={{color: "#E47472"}}>COMPANY INFORMATION</p>
            <div style={outline}>
              <p>{tagline}</p>
              <p>{address}</p>
              <p>{industry}</p>
            </div>
          </Grid.Row>
          <Grid.Row>
            <p style={{color: "#E47472"}}>ABOUT US</p>
            <div style={outline}>
              <p>{description}</p>
            </div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={8} stretched>
          <div style={colored}>
          <h4 style={{color: "#E47472"}}>Recent Job Post</h4>
          </div>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  )
}