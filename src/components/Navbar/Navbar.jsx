import React, { useContext } from 'react'
import styled from 'styled-components'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { userContext } from '../../context/userContect'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 60px;
  width: 100%;
  background-color: transparent;
  width: 90%;
  z-index: 100;
`

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: fit-content;
`

const MenuIcon = styled.img`
z-index: 100;
width: 27px;
`

const HeaderTitle = styled.img`
z-index: 100;
`

const User = styled.img`
  border-radius: 50%;
  z-index: 100;
`

export const Navbar = () => {
  const context = useContext(userContext);
  const { menuClicked, ExitNav, toggle } = context;

  return (
    <Container>
      {menuClicked ?
      <MenuIconContainer onClick={toggle}>
        <MenuIcon style={{width: "15px"}} src='./assets/cerrar.svg'  onClick={ExitNav}/>
      </MenuIconContainer> 
      :
      <MenuIconContainer onClick={toggle}>
        <MenuIcon src='./assets/menu.svg' onClick={ExitNav}/>
      </MenuIconContainer>
      }
      <HeaderTitle src='./assets/title.svg'/>
      <User src='./assets/user.svg'/>
      {menuClicked && <BurgerMenu/>}
    </Container>
  )
}
