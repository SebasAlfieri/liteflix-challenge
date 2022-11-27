import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top:60px;
  left:0;
  background-color: #242424;
  height: 100vh;
  width: 100vw;
  z-index: 60;
  margin-top:-60px;
  padding-top: 30px;
`

const NavContainer = styled.nav`
  height: calc( 100vh - 60px);
  width: 90%;
  color: white;
  letter-spacing: 4px;
  font-size: 16px;
`

const List = styled.ul`
padding-left: 0;
display: flex;
flex-direction: column;
gap: 40px;
list-style: none;
font-weight: 300;
`

const Li = styled.li`
  &:hover{
    font-weight: 400;
  }
`

export const BurgerMenu = () => {

  return (
    <MenuContainer>
      <NavContainer>
        <List>
          <Li>INICIO</Li>
          <Li>SERIES</Li>
          <Li>PELÍCULAS</Li>
          <Li>AGREGADAS RECIENTEMENTE</Li>
          <Li>POPULARES</Li>
          <Li>MIS PELÍCULAS</Li>
          <Li>MI LISTA</Li>
          <Li style={{marginTop: "20px", fontWeight: "500"}}><img src="./assets/mainPlus.svg" alt="plusSymbol" /> AGREGAR PELÍCULA</Li>
          <Li style={{marginTop: "20px"}}>CERRAR SESIÓN</Li>
        </List>
      </NavContainer>
    </MenuContainer>
  )
}