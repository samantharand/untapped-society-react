import React from 'react'
import '../../Common.css'

export default function Nav(props) {
	return (
		<header> 
			<div className='Nav'>
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
		</header>
	)
}