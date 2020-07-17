import React from 'react';
import { Card } from 'semantic-ui-react';

export default function JobPost(props) {
  const jobPost = props.jobPost;
  const gridStyle = {
    background: "white",
    borderRadius: "10px",
    margin: "0 auto"
  }
  return (
    <Card>
      <Card.Content>
        <Card.Header>{jobPost.title}</Card.Header>
        <Card.Meta>{jobPost.jobtype}</Card.Meta>
        <Card.Meta>{jobPost.officelocation}</Card.Meta>
        <Card.Description>
        {jobPost.description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}