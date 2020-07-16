import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function JobPostDetail(props) {
  const jobPost = props.jobPost;
  const gridStyle = {
    background: "white",
    borderRadius: "10px",
    margin: "0 auto",
    height: "max-content"
  }
  return (
    <Grid>
      <Grid.Column width={3} textAlign="center" style={gridStyle}>
        <Image src={jobPost.company.photo} circular/>
        <strong>{jobPost.title}</strong>
        <p>{jobPost.company.name}</p>
      </Grid.Column>
      <Grid.Column width={9} style={gridStyle}>
        <strong>{jobPost.title}</strong>
        <p>{jobPost.company.name}</p>
        <p>{jobPost.company.location}</p>
        <p>Type: {jobPost.jobtype}</p>
        <p>Function: {jobPost.function}</p>
        <p>Education level: {jobPost.educationlevel}</p>
        <p>Career level: {jobPost.careerlevel}</p>
        <p>Office Location: {jobPost.officelocation}</p>
        <p>{jobPost.description}</p>
        <p>Compensation: {jobPost.compensation}</p>
      </Grid.Column>
    </Grid>
  )
}