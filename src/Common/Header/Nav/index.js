import React from 'react'
import '../../Common.css'

export default function Nav(props) {
	return (
		<header> 
			<div className='Nav'>
				<props.Link to='/'> Home </props.Link>
				<props.Link to='#'> About </props.Link>
				<props.Link to='#'> Mentorship </props.Link>
				<props.Link to='#'> Career Support </props.Link>
				<props.Link to='#'> Messaging </props.Link>

				<props.Link to='/profile/'> profile </props.Link>
				<props.Link to='/login'> login </props.Link>
				<props.Link to='/createprofile'> new profile </props.Link>
				<props.Link to='/jobs'> jobs </props.Link>
			</div>
		</header>
	)
}