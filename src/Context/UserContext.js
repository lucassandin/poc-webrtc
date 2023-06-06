import React, { createContext, useContext, useState, useRef } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    type: ""
  });

  const publisher = useRef(null);
  const subscribers = useRef(null);
  const screenshare = useRef(null);

  const handleCreateUserSession = (user, data) => {
    localStorage.setItem(user, JSON.stringify(data));
  }

  const handleGetUserSession = (user) => {
    return JSON.parse(localStorage.getItem(user));
  }

  const handleUpdateUserSession = (user, data) => {
    localStorage.setItem(user, JSON.stringify(data));
  }
  
  return (
    <UserContext.Provider value={{ 
        user, 
        setUser, 
        handleCreateUserSession, 
        handleGetUserSession, 
        handleUpdateUserSession,
        publisher,
        subscribers,
        screenshare
      }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (!context) {
      throw new Error('useLoading must be used within UserContext')
  }
  return context
}
