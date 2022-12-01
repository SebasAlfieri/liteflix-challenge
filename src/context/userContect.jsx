import React, { useState, createContext } from "react"
import useBodyScrollLock from "../hooks/useBodyScrollLock";

const userContext = createContext();

export default function UserContextProvider(props){
  const [menuClicked, setMenuClicked] = useState(false)
  const [succes, setSucces] = useState(false)
  const [isListo, setIsListo] = useState(false)
  const [isUserEmpty, setIsUserEmpty] = useState(false)
  const [isLocked, toggle] = useBodyScrollLock()
  const [uploading, setUploading] = useState(false)
  const [userMovie, setUserMovie] = useState({
    img: "",
    title: ""
  })
  let moviesArray = []
  let localString = localStorage.getItem("userMovies")
  let localArray = JSON.parse(localString)

  if (localArray === null){
    localArray = []
  }
  const [uploadedName, setUploadedName] = useState("")


  const ExitNav = () => {
    setMenuClicked(!menuClicked)
    console.log("menu -->", menuClicked)
  }




  return (
    <userContext.Provider
      value={{
        menuClicked,
        setMenuClicked,
        ExitNav,
        isLocked,
        toggle,
        userMovie,
        setUserMovie,
        moviesArray,
        localString,
        localArray,
        uploading,
        setUploading,
        isListo,
        setIsListo,
        succes,
        setSucces,
        uploadedName,
        setUploadedName,
        isUserEmpty,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}









export { userContext };