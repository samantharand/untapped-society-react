import React from 'react'

export default function Nav(props) {
	return (
		<div>
			<props.Link to='/profile/'> profile </props.Link>
			|
			<props.Link to='/profile/update'> edit profile </props.Link>
			|
			<props.Link to='/login'> login </props.Link>
			|
			<props.Link to='/createprofile'> new profile </props.Link>
			|
			<props.Link to='/jobs'> jobs </props.Link>
		</div>
	)
}