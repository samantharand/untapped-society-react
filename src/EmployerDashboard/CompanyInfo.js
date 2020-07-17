import React from 'react';
import { Grid, Image, Button, Card } from 'semantic-ui-react';
import JobPost from './JobPost';
export default function CompanyInfo(props) {
  const {
    name, description, tagline, address, 
    industry, photo
  } = props.companyInfo;
  const outline = {
    border: "1px solid #E47472",
    borderRadius: "10px",
    padding: "20px"
  }
  const colored = {
    background: "#F5E7E1",
    borderRadius: "10px",
    padding: "20px"
  };
  const titleStyle = {
    textAlign: "center",
    color: "#E47472"
  }
  const divStyle = {
    margin: "0 200px"
  }
  const JobPosts = props.companyInfo.jobposts.map((jobPost, key)=> {
    return (
      <JobPost 
        jobPost={jobPost} 
        key={key}
      />
    )
  })
  return (
    <div style={divStyle}>
      <Button onClick={()=> props.toggleCreate()}>Add Job</Button>
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
        <Grid.Column width={12} stretched>
          <div style={colored}>
          <h4 style={{color: "#E47472"}}>Recent Job Post</h4>
          <Card.Group>{JobPosts}</Card.Group>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}