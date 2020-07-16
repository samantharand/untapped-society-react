import React from 'react'
import '../../Common.css'
import { Icon } from 'semantic-ui-react'

export default function Nav(props) {
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
					<div className='LoginInfo'>
						<Icon name="user circle outline" size='large'/> 
						<props.Link to='/login'> Log in </props.Link>
					</div>
					:
					<div className='UserNav'>
						<props.Link to='/profile/'> profile </props.Link>
						<props.Link to='/createprofile'> new profile </props.Link>
						<props.Link to='/jobs'> jobs </props.Link>
					</div>
				}
			</div>
		</header>
	)
}