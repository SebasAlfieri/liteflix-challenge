import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import useIsMobile from '../../hooks/useIsMobile.ts'
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

  .bell{
    transition: 0.3s;

    &:hover{
      transform: scale(1.2)
    }
  }

  @media (min-width: 768px){
    justify-content: flex-end;
    gap: 40px;
    padding-top: 20px;
    padding-right: 0px;
  }

  
  @media (min-width: 992px){
    padding-right: 80px;
  }
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
  z-index: 110;
`

const MenuIconDesktop = styled.img`
  position: relative;
  right: 425px;
  width: 0px;
  z-index: 110;
  transition: 0.3s;
`

const HeaderTitleContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  
  @media (min-width: 768px){
    gap: 60px;
    width: fit-content;
    margin: 0;
    padding: 0%;
    right: unset;
    left: 100px;
    top: 30px;
    z-index: 40;
  }
`

const HeaderTitle = styled.img`
  display: flex;
  width: 113px;
  justify-content: center;
  align-items: center;
`

const HeaderButton = styled.div`
color: white;
letter-spacing: 4px;
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 10px;

  p{
    width: fit-content;
    white-space: nowrap;
  }
`

const User = styled.img`
  border-radius: 50%;
  z-index: 100;
  transition: 0.3s;

  &:hover{
    transform: scale(1.2)
  }
`

export const Navbar = () => {
  const context = useContext(userContext);
  const { menuClicked, ExitNav, toggle } = context;
  const isMobile = useIsMobile();

  console.log(isMobile)

  return (
    <Container>
      {isMobile ? 
      <>
        {menuClicked ?
        <MenuIconContainer onClick={toggle}>
          <MenuIcon style={{width: "15px"}} src='./assets/cerrar.svg'  onClick={ExitNav}/>
        </MenuIconContainer> 
        :
        <MenuIconContainer onClick={toggle}>
          <MenuIcon src='./assets/menu.svg' onClick={ExitNav}/>
        </MenuIconContainer>
        }
      </> : 
      <>
        {menuClicked ?
            <MenuIconDesktop
            style={{width: "15px"}} src='./assets/cerrar.svg'  onClick={ExitNav}/>
          :
          <MenuIconContainer onClick={toggle}>
            <MenuIcon
            as={motion.img}
            initial={{ scaleX: -1 }}
            whileHover={{ scale: 1.2, scaleX: -1 }} src='./assets/menu.svg' onClick={ExitNav}/>
          </MenuIconContainer>
          }
      </>
      }
      {isMobile ? null 
      : 
      <img className='bell' src='./assets/bell.svg' alt='notifications' style={{zIndex: "100"}}/>}
      <User src='./assets/user.svg'/>
      {menuClicked && <BurgerMenu/>}
      <HeaderTitleContainer>
        <HeaderTitle src='./assets/title.svg'/>
        {isMobile ? null
        : 
        <HeaderButton>
          <img src="./assets/mainPlus.svg" alt="add button" />
          <p>AGREGAR PELÍCULA</p>  
        </HeaderButton>}
      </HeaderTitleContainer>
    </Container>
  )
}
