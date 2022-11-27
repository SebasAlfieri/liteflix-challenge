import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PopularItem } from "./PopularItem";
import { Dropdown } from "./Dropdown";

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



export const Popular = (props) => {

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
            {data.results.slice(0, 4).map((item, index)  => {
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
      : 'not'}
    </PopularContainer>
  );
};
