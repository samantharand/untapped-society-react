import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './Common.css'

export default function Home(props){
	return (
		<div className='HomeContainer'>
			<div className='One'>
				<h2> Striving for inclusivity and promoting diverse talent </h2>
				<p> Becoming apart of our community or help others find opportunities </p>
				<Button> Join </Button>
				<Button> Post a job </Button>
			</div>
			<div className='Two'>
				<div className='MentorshipContainer'>
					<h4> Mentorship </h4>
					<Icon name='talk' size='huge'/> 
					<p> Match with experts for career advice and more </p>
				</div>
				<div className='NetworkContainer'>
					<h4> Network </h4>
					<Icon name='calendar alternate' size='huge'/> 
					<p> Find events near you and meet with others in the field </p>
				</div>
				<div className='CareerContainer'>
					<h4> Career Surf </h4>
					<Icon name='object group outline' size='huge'/> 
					<p> Search available positions or post a job for others </p>
				</div>
				<div className='SkillsContainer'>
					<h4> Build Skills </h4>
					<Icon name='desktop' size='huge'/> 
					<p> Search available positions or post a job for others </p>
				</div>
			</div>
			<div className='ForJoining'>
				<h2> What do I get for joining? </h2>
				<div>
					<div className='JTC'>
						<h4> Join The Community </h4>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div className='JPA'>
						<h4> Job Poster Account </h4>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
					</div>
				</div>
			</div>
			<div className='AboutUs'>
				<h2> About Us </h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
			</div>
			<div className='NoAccount'>
				<h2> No account? No problem! </h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				<p> So what are you waiting for? Begin your journey today! </p>
				<Button> Join </Button>
				<Button> Post a job </Button>
			</div>
			<footer /> 
		</div>
	)
}