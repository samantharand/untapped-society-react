import React from 'react'

export default function Nav(props) {
	return (
		<ul>			
			<li><props.Link to='/profile/'> profile </props.Link></li>
			<li><props.Link to='/profile/update'> edit profile </props.Link></li>
			<li><props.Link to='/login'> login </props.Link></li>
			<li><props.Link to='/createprofile'> new profile </props.Link></li>

		</ul>
	)
}