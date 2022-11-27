import React, { useState } from 'react'
import styled from 'styled-components'


const DropdownContainer = styled.div`


`

const DropdownBtn = styled.div`
  padding: 10px;
  width: 170px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DropdownContent = styled.div`
width: 170px;
padding: 10px;
background-color: #fff;
`

const DropdownItem = styled.div`
`



export const Dropdown = ({selected, setSelected}) => {


  const [isActive, setIsActive] = useState(false)
  const options = ["POPULARES", "MIS PELICULAS"]


  return (
    <DropdownContainer>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}><span>VER: </span>{selected}</DropdownBtn>
      {isActive && (
      <DropdownContent>
          <>

          {options.map(option => (
            <DropdownItem 
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)}}>
              {option}
            </DropdownItem>
          ))}
          </>
        
      </DropdownContent>
      )}
    </DropdownContainer>
  )
}
