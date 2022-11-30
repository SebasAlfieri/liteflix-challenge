import React, { useState, createContext } from "react"
import useBodyScrollLock from "../hooks/useBodyScrollLock";

const userContext = createContext();

export default function UserContextProvider(props){
  const [menuClicked, setMenuClicked] = useState(false)
  const [isLocked, toggle] = useBodyScrollLock()


  const ExitNav = () => {
    setMenuClicked(!menuClicked)
    console.log("menu -->", menuClicked)
  }




  return (
    <userContext.Provider
      value={{
        menuClicked,
        ExitNav,
        isLocked,
        toggle
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}









export { userContext };