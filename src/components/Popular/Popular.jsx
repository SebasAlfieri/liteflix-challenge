import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { PopularItem } from "./PopularItem";
import { Dropdown } from "./Dropdown";
import { UserMovie } from "../MyMovies/UserMovie";
import { userContext } from '../../context/userContect'

const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  z-index: 0;
`;

const UserMovieContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DeleteAll = styled.input`
  margin-top: 20px;
  width: 150px;
  color: white;
  letter-spacing: 4px;
  font-family: Bebas Neue;
  background-color: #353535;
  border: none;
`

const showmovie = localStorage.getItem("movie")
const showmovie2 = localStorage.getItem("movie2")
const showmovie3 = localStorage.getItem("movie3")
const showmovie4 = localStorage.getItem("movie4")
const showtitle = localStorage.getItem("title")
const showtitle2 = localStorage.getItem("title2")
const showtitle3 = localStorage.getItem("title3")
const showtitle4 = localStorage.getItem("title4")

let moviesArr = [{title: showtitle, img: showmovie}, {title: showtitle2, img: showmovie2}, {title: showtitle3, img: showmovie3}, {title: showtitle4, img: showmovie4}]

if (localStorage.getItem("movie4") === null){
  moviesArr = [{title: showtitle, img: showmovie}, {title: showtitle2, img: showmovie2}, {title: showtitle3, img: showmovie3}]
} if (localStorage.getItem("movie3") === null){
  moviesArr = [{title: showtitle, img: showmovie}, {title: showtitle2, img: showmovie2}]
} if (localStorage.getItem("movie2") === null){
  moviesArr = [{title: showtitle, img: showmovie}]
} if (localStorage.getItem("movie") === null){
  moviesArr = []
}  

function handleDeleteAll(){
  localStorage.clear()
}

export const Popular = (props) => {

  const context = useContext(userContext);
  const { localArray } = context;
  const [isPopularOn, setIsPopularOn] = useState(true)
  const [selected, setSelected] = useState("POPULARES")
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)

  function inputChangeHandler(e){
    setIsPopularOn(!isPopularOn)
  }

  useEffect (() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data)
    })
    .finally (() =>{
      setLoading(false);
    })
  },[])

  return (
    <PopularContainer>
      <Dropdown selected={selected} setSelected={setSelected} setIsPopularOn={setIsPopularOn} isPopularOn={isPopularOn}/>
      {selected === "POPULARES" ? 
      <ItemsContainer>
        {loading ? "" :
          <div>
            {data.results.slice(0, 4).map((item)  => {
              return(
                <PopularItem
                key={item.id}
                title={item.original_title}
                bg={item.backdrop_path}/>
              );
            })}
          </div>
        }
      </ItemsContainer> 
      :
      <UserMovieContainer>
        {localArray.map((item, i) => {
          return(
            <UserMovie
            key={i}
            title={item.title}
            bg={item.img}/>
          );
        })}
        <DeleteAll type="button" value="Delete All" onClick={handleDeleteAll}/>
      </UserMovieContainer>
      
    }
    </PopularContainer>
  );
};
