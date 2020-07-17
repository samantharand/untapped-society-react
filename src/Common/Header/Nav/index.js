import React from 'react'
import '../../Common.css'
import { Icon } from 'semantic-ui-react'

export default function Nav(props) {

	console.log("!!!!!")
	console.log(props.currentUser);
	const jobseeker = (
		<div className='UserNav'>	
			<props.Link to='/profile/'> Profile </props.Link>
			<props.Link to='/createprofile'> New Profile </props.Link>
			<props.Link to='/jobs'> Jobs </props.Link>
			<props.Link to='#'> | </props.Link>
			<props.Link to='/logout'><strong> LOG OUT </strong></props.Link>
		</div>
	)
	const employer = (
		<div className='UserNav'>
			<props.Link to='/dashboard'> Dashboard </props.Link>
			<props.Link to='/viewapplications'> View Apps </props.Link>
			<props.Link to='/viewjobs'> View Job Posts </props.Link>
			<props.Link to='#'> | </props.Link>
			<props.Link to='/logout'> <strong> LOG OUT </strong> </props.Link>
		</div>
	)

	return (
		<header className='NavHeader'> 
			<img src='../../../../assets/us_logo.png' />
			<div className='Nav'>
				<props.Link to='/'> Home </props.Link>
				<props.Link to='#'> About </props.Link>
				<props.Link to='#'> Mentorship </props.Link>
				<props.Link to='#'> Career Support </props.Link>
				<props.Link to='#'> Messaging </props.Link>
				<props.Link to='#'> | </props.Link>

				{
					props.currentUser === null
					?			
					<div className='AuthLinks'>
						<props.Link to='/login'> <strong> LOGIN </strong> </props.Link>
					</div>
					:
					(
						props.currentUser.jobseeker
						?
						jobseeker
						:
						employer
					)
				}

			</div>
		</header>
	)
}