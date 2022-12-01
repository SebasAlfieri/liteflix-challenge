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

  @media (min-width: 576px) {
    justify-content: space-between;
    min-height: 100px;
    height: 95%;
    margin-bottom: 0;
    padding: 0;
    gap: 0px;
    margin-bottom: 0;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  gap: 25px;

  @media (min-width: 576px) {
    justify-content: flex-start;
    height: 90%;
    width: 241px;
    overflow-y: auto;
    gap: 25px;
    padding-bottom: 15px;
  }
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
  const [isEmpty, setIsEmpty] = useState(false)

  if(localArray === []){
    setIsEmpty(true)
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
          <>
            {data.results.slice(0, 4).map((item)  => {
              return(
                <PopularItem
                key={item.id}
                title={item.original_title}
                bg={item.backdrop_path}
                vote={item.vote_average}
                date={item.release_date}/>
              );
            })}
          </>
        }
      </ItemsContainer> 
      :
      <ItemsContainer>
        {localArray.map((item, i) => {
          return(
            <UserMovie
            key={i}
            title={item.title}
            bg={item.img}/>
          );
        })}
        {isEmpty ? "" : <DeleteAll type="button" value="Delete All" onClick={handleDeleteAll}/>}
      </ItemsContainer>
      
    }
    </PopularContainer>
  );
};
