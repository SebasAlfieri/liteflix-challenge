import React, { useState } from "react";
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

const Ver = styled.div`
  color: white;
  display: flex;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const SelectContainer = styled.div`
  display: flex;
  width: 170px;
  font-weight: 300;
  letter-spacing: 4px;
  font-size: 18px;
  color: white;
  justify-content: space-between;
  align-items: center;
`

const Select = styled.select`
  background-color: #242424;
  border: none;
  color: white;
  font-family: Bebas Neue;
  letter-spacing: 4px;
  font-size: 18px;
  outline: none;
  border: 0!important;
  box-shadow: none;
  overflow: hidden;

  &::-ms-expand{
    display: none;
    position: absolute;
  }

  option{
    border: none;
    font-weight: 300;
    background: transparent !important;
    letter-spacing: 4px;
  }

  option:focus {outline:none !important ;background: transparent !important;}

  option:hover {outline:0 !important; background: transparent !important;}

  option:checked{
    font-weight: 400;
    
  }

  option:active{
  }


  
  option:not(:checked){
    font-weight: 300;
    
  }
`



export const Popular = () => {

  const [isPopularOn, setIsPopularOn] = useState(true)
  const [selected, setSelected] = useState("POPULARES")

  function inputChangeHandler(e){
    setIsPopularOn(!isPopularOn)
  }

  return (
    <PopularContainer>
      {/* <SelectContainer>
      <label htmlFor="format">VER:</label>
      <Select
      className="select"
        name="format" id="format"
        onChange={inputChangeHandler}
      >
        <option value={false} >
          popular
        </option>
        <option  value={true}>
          mis peliculas
        </option>
      </Select>
      </SelectContainer> */}

      <Dropdown selected={selected} setSelected={setSelected}/>
      <Ver>
        <p>
          VER: <b>POPULARES </b>
        </p>
      </Ver>

      {isPopularOn ? 
      <ItemsContainer>
        <PopularItem img="./assets/ejemplopeli.svg" />
        <PopularItem img="./assets/ejemplopeli2.svg" />
        <PopularItem img="./assets/ejemplopeli3.svg" />
        <PopularItem img="./assets/ejemplopeli4.svg" />
      </ItemsContainer> 
      :
      'not'}
      
    </PopularContainer>
  );
};
