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
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

 const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]: true} )
  }


    return (
        <StateContext.Provider value={{activeMenue, setActiveMenue,isClicked,screenSize, setScreenSize, setIsClicked, handleClick}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);