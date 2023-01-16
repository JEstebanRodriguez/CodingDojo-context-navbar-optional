import React, { useContext } from 'react'
import { UserContext } from '../context/user'

export const Form = () => {
	const { username, setUsername } = useContext(UserContext)
	const handleChange = ({ target }) => {
		setUsername(target.value)
	}
	return (
		<form>
			<label htmlFor='username'>Your Name: </label>
			<input
				type='text'
				name='username'
				className='input'
				placeholder='Enter your name...'
				autoComplete='off'
				value={username}
				onChange={handleChange}
			/>
		</form>
	)
}
