import React from 'react';

export default function JobPost(props) {
  const jobPost = props.jobPost;
  return (
    <div onClick={() => props.selectJob(jobPost.id)}>
      <li>{jobPost.title}</li>
    </div>
  )
}