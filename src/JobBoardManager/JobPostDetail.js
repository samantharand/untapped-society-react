import React from 'react';

export default function JobPostDetail(props) {
  const jobPost = props.jobPost;
  return (
    <React.Fragment>
      <h2>Title:{jobPost.title}</h2>
      <p>Company: {jobPost.company.name}</p>
    </React.Fragment>
  )
}