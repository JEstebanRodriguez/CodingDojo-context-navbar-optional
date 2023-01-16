import React from 'react'
import UserContextProvider from '../context/user'
export const Wrapper = ({ children }) => {
	return <UserContextProvider>{children}</UserContextProvider>
}
