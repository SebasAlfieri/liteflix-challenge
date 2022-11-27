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
  /* width: 170px; */
  background-color: #242424;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: white;
  width: 250px;
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
`

const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`

export const Dropdown = ({selected, setSelected}) => {

  const [isActive, setIsActive] = useState(false)
  const options = [{isOn: 0, text:"POPULARES"}, {isOn: 1, text:"MIS PELICULAS"}]
  const [checked, setChecked] = useState(0)

  return (
    <DropdownContainer>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}><span>VER: </span>{selected}<img src='./assets/dropDownArrow.svg' alt='arrow'></img></DropdownBtn>
      {isActive && (
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
      )}
    </DropdownContainer>
  )
}
