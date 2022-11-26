import React from 'react'
import styled from 'styled-components'


const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 40px;

  button{
    font-family: Bebas neue;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #242424;
    height: 56px;
    width: 248px;
    font-size: 18px;
    letter-spacing: 4px;
    border: none;
    border: 1px solid #ffffff0;

    &:hover{
      border: 1px solid #ffffff7f;
    }

    img{
      margin-right: 10px;
    }
  }
`

const PlayButton = styled.button`
`

const ListButton = styled.button`
`


export const MainButtons = () => {
  return (
    <ButtonsContainer>
      <PlayButton><img src='./assets/mainPlay.svg' alt='add icon'/>REPRODUCIR</PlayButton>
      <ListButton><img src='./assets/mainPlus.svg' alt='add icon'/>MI LISTA</ListButton>
    </ButtonsContainer>
  )
}
