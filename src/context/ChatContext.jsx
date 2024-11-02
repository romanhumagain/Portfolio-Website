import React, { createContext, useContext, useState, useEffect } from 'react'

export const ChatContext = createContext();

export const useChat = () => { return useContext(ChatContext) };

const ChatContextProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const context = {
    userRole,
    isAuthenticated,
    setIsAuthenticated

  }

  return (
    <ChatContext.Provider value={context}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider