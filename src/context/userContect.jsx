import React, { useState, createContext } from "react"
import useBodyScrollLock from "../hooks/useBodyScrollLock";

const userContext = createContext();

export default function UserContextProvider(props){
  const [menuClicked, setMenuClicked] = useState(false)
  const [isLocked, toggle] = useBodyScrollLock()

  const [userMovie, setUserMovie] = useState({
    img: "",
    title: ""
  })


  let moviesArray = []

  let localString = localStorage.getItem("userMovies")

  let localArray = JSON.parse(localString)
  console.log(localArray)


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
        toggle,
        userMovie,
        setUserMovie,
        moviesArray,
        localString,
        localArray
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}









export { userContext };