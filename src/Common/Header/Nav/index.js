import React from 'react'
import '../../Common.css'
import { Icon } from 'semantic-ui-react'

export default function Nav(props) {
	let userNotJobSeeker;

	if(props.currentUser !== null) {
		if(!props.currentUser.jobseeker) {
			userNotJobSeeker = true
		}
	}
	return (
		<header className='NavHeader'> 
			<img src='../../../../assets/us_logo.png' />
			<div className='Nav'>
				<props.Link to='/'> Home </props.Link>
				<props.Link to='#'> About </props.Link>
				<props.Link to='#'> Mentorship </props.Link>
				<props.Link to='#'> Career Support </props.Link>
				<props.Link to='#'> Messaging </props.Link>

				{
					props.currentUser === null
					?			
					<div className='AuthLinks'>
						<props.Link to='/login'> LOGIN </props.Link>
					</div>
					:
					<div className='UserNav'>
						<props.Link to='/profile/'> profile </props.Link>
						<props.Link to='/createprofile'> new profile </props.Link>
						<props.Link to='/jobs'> jobs </props.Link>
						<props.Link to='/logout'> LOG OUT </props.Link>
					</div>
				}

				{
					userNotJobSeeker
					&&
					<props.Link to='/viewapplications'> View Apps </props.Link>
				}


			</div>
		</header>
	)
}