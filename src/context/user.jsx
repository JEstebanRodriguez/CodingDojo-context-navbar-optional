import React, { createContext, useState } from 'react'

export const UserContext = createContext('')

const UserContextProvider = ({ children }) => {
	const [username, setUsername] = useState('')
	return (
		<UserContext.Provider value={{ username, setUsername }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContextProvider
