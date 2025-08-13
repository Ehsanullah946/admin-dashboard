import React, { createContext, CreateContext, useContext, useState } from "react"

const StateContext = createContext();

const initialState = {
    Chat: false,
    Cart: false,
    userProfile: false,
    notification:false
}

export const ContextProvider = ({ children }) => {
    const [activeMenue, setActiveMenue] = useState(true);
    return (
        <StateContext.Provider value={{activeMenue, setActiveMenue}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);