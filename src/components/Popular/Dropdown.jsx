import React, { useState } from 'react'
import styled from 'styled-components'


const DropdownContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  font-size: 18px;
  letter-spacing: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DropdownBtn = styled.div`
  padding: 10px;
  background-color: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: white;
  width: 250px;
  cursor: pointer;

  @media (min-width: 576px){
    background-color: #24242457;
    padding: 5px;
    width: fit-content;
    transition: 0.2s;

    &:hover{
      background-color: #242424be;
    }
  }

  span{
    @media (min-width: 576px){
    font-weight: 300;
  }
  }
`

const Arrow = styled.div`
  display: none;
  position:relative;
  background-color: #242424;
  width: 12px;
  height: 12px;
  margin-top:-12px;
  top: 16px;
  left: 80px;
  transform: rotate(45deg);
  
  @media (min-width: 576px){
    display: flex;
  }
`

const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: relative;
  width: 300px;
  height: 112px;
  background-color: #242424;
  color: white;
  font-size: 16px;
  left: 0;
  z-index: 50;
  margin-bottom: -112px;

  @media (min-width: 576px){
    width: 241px;
    height: 96px;
    margin-bottom: -106px;
    margin-top: 10px;
  }

`

const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`

export const Dropdown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false)
  const options = [{isOn: 0, text:"POPULARES"}, {isOn: 1, text:"MIS PELICULAS"}]
  const [checked, setChecked] = useState(0)

  return (
    <DropdownContainer>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}><span>VER: </span>{selected}<img src='./assets/dropDownArrow.svg' alt='arrow'></img></DropdownBtn>
      {isActive && (
        <>
        <Arrow/>
        <DropdownContent>
          {options.map((option, i) => (
            <DropdownItem 
              onClick={(e) => {
                setSelected(option.text)
                setIsActive(false)
                setChecked(i)
                }}
                key={option.isOn}>
                {option.text}
              
              {checked === option.isOn
                ? <img src='./assets/check.svg' alt='checked'/>
                : ""
                }
            </DropdownItem>
            ))}
        </DropdownContent>
      </>
      )}
    </DropdownContainer>
  )
}
