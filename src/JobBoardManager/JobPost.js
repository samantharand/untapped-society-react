import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function JobPost(props) {
  const jobPost = props.jobPost;
  const gridStyle = {
    background: "white",
    borderRadius: "10px",
    margin: "0 auto"
  }
  return (
    <Grid.Row 
      style={{margin: "20px 0"}} 
      onClick={() => props.selectJob(jobPost.id-1)}
    >
      <Grid.Column width={3} textAlign="center" style={gridStyle}>
        <Image src={jobPost.company.photo} circular/>
        <strong>{jobPost.title}</strong>
        <p>{jobPost.company.name}</p>
      </Grid.Column>
      <Grid.Column width={9} style={gridStyle}>
        <strong>{jobPost.title}</strong>
        <p>{jobPost.company.name}</p>
        <p>{jobPost.company.address}</p>
        <p>{jobPost.description}</p>
      </Grid.Column>
    </Grid.Row>
  )
}