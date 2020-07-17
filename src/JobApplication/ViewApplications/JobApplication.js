import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';

export default function JobApplication(props) {
  const jobApp = props.jobApp;
  const gridStyle = {
    background: "white",
    borderRadius: "10px",
    margin: "0 auto"
  }
  return (
    <Grid.Row 
      style={{margin: "20px 0", display:'flex', flexDirection:'column', width:'200px'}} 
    >
      <Grid.Column width={3} textAlign="center" style={gridStyle}>
        <strong>{jobApp.jobseeker.name}</strong>
        <Image src={jobApp.jobseeker.photo} circular className='JobApplicantPhoto'/>
      </Grid.Column>
      <Grid.Column width={9} style={gridStyle}>
        <strong>About Applicant</strong>
        <p>{jobApp.jobseeker.education}</p>
        <p>{jobApp.jobseeker.industry}</p>
        <p>{jobApp.jobseeker.skillset}</p>
        <p>{jobApp.jobseeker.language}</p>
      </Grid.Column>
      <Button> Move Forward </Button>
      <Button color='red'> Turn Down </Button>
    </Grid.Row>
  )
}