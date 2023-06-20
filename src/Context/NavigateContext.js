import React, { createContext, useContext, useState } from 'react'

const NavigateContext = createContext(null)

export const NavigateProvider = ({ children }) => {
  const [headerBack, setHeaderBack] = useState(false);
  const [isOverlay, setIsOverlay] = useState("false");
  const [titleHeader, setTitleHeader] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("true");

  return (
    <NavigateContext.Provider value={{ 
      backgroundColor, 
      setBackgroundColor,
      headerBack, 
      setHeaderBack, 
      isOverlay, 
      setIsOverlay, 
      titleHeader, 
      setTitleHeader 
    }}>
        {children}
    </NavigateContext.Provider>
  )
}

export function useNavigateContext() {
    const context = useContext(NavigateContext)
    if (!context) {
        throw new Error('useLoading must be used within NavigateContext')
    }
    return context
}
