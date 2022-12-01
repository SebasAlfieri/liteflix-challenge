import React from 'react'
import styled from 'styled-components'


const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`

const PlayButton = styled.button`
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
    border: 1px solid #ffffff00;

    &:hover{
      border: 1px solid #ffffff7f;
      background-color: white;
      color: #242424;
    }

    img{
      margin-right: 10px;
    }
`

const ListButton = styled.button`
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
    border: 1px solid #ffffff00;
    border: 1px solid #ffffff7f;

    &:hover{
      background-color: white;
      color: #242424;
    }

    img{
      margin-right: 10px;
    }
`


export const MainButtons = () => {
  return (
    <ButtonsContainer>
      <PlayButton><img src='./assets/mainPlay.svg' alt='add icon'/>REPRODUCIR</PlayButton>
      <ListButton><img src='./assets/mainPlus.svg' alt='add icon'/>MI LISTA</ListButton>
    </ButtonsContainer>
  )
}
