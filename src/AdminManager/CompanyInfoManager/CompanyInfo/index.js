import React from 'react';

export default function CompanyInfo(props) {
  const {
    name, description, tagline, address, industry,
    website, linkedin, github, twitter,
    facebook, instagram, pinterest, youtube, photo
  } = props.companyInfo;
  return (
    <div>
      <img src={photo} />
      <p>name: {name}</p>
      <p>description: {description}</p>
      <p>tagline: {tagline}</p>
      <p>address: {address}</p>
      <p>industry: {industry}</p>
      <p>website: {website}</p>
      <p>linkedin: {linkedin}</p>
      <p>github: {github}</p>
      <p>twitter: {twitter}</p>
      <p>facebook: {facebook}</p>
      <p>instagram: {instagram}</p>
      <p>pinterest: {pinterest}</p>
      <p>youtube: {youtube}</p>
      <button onClick={props.toggleEdit}>update</button>
    </div>
  )
}