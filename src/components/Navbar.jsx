import React, { useContext } from 'react'
import { UserContext } from '../context/user'

export const Navbar = () => {
	const { username } = useContext(UserContext)
	return (
		<div
			style={{
				backgroundColor: '#8c30c5',
				color: '#ffffff',
				padding: '1rem 4rem',
				display: 'flex',
				justifyContent: 'flex-end'
			}}>
			<span style={{ fontSize: '1.5rem' }}>
				Hi {username ? username : 'Bob Smith'}!
			</span>
		</div>
	)
}
