import React, { useState, useContext } from 'react'
import { userContext } from '../../context/userContect'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MainContainer } from '../Dropzone/MainContainer'
import useIsMobile from '../../hooks/useIsMobile.ts'

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
  padding-top: 20px;

  @media (min-width: 768px){
    width: 760px;
    left:unset;
    right: 0;
    top:0;
    bottom:0;
    height: 100vh;
    margin-top: 0;
    padding-top: 0;
    z-index: 90;
    overflow-y: auto;
  }
`

const NavContainer = styled.nav`
  height: calc( 100vh - 60px);
  width: 90%;
  color: white;
  letter-spacing: 4px;
  font-size: 16px;

  @media (min-width: 768px){
    height: calc( 100vh - 80px);
  }

  @media (min-width: 1400px){
    font-size: 22px;
    height: calc( 100vh - 120px);
  }
`

const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  list-style: none;
  font-weight: 300;

  @media (min-width: 768px){
    gap: 27px;
    }

  @media (min-width: 1400px){
  gap: 38px;
  }

`

const Li = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  &:hover{
    font-weight: 400;
  }
`

const MenuIconDesktop = styled.img`
  position: relative;
  bottom: 60px;
  width: 17px;
  z-index: 110;
  transition: 0.3s;
  margin-bottom: -50px;
  padding: 0;

  @media (min-width: 1400px){
    bottom: 90px;
  }
`

export const BurgerMenu = () => {
  const context = useContext(userContext);
  const { menuClicked, ExitNav, setDropzoneDesktop } = context;
  const [isClicked, setIsClicked] = useState(false)
  const isMobile = useIsMobile();

  function dropExitNav() {
    ExitNav()
    setDropzoneDesktop(true)
  }

  return (
    <MenuContainer
      as={motion.div}
      initial={{ y: -2000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3,  ease: 'easeOut' }}
      exit={{ x: -300, opacity: 0, transition:{duration: 1} }}>
      <NavContainer >
        {isClicked ? <MainContainer/>
        : 
        <List>
          {isMobile ? null :
            <>
              {menuClicked ? <MenuIconDesktop style={{width: "15px"}} src='./assets/cerrar.svg' alt="cerrar menu" onClick={ExitNav}/> : null}
            </>
          }
          <Li>INICIO</Li>
          <Li>SERIES</Li>
          <Li>PELÍCULAS</Li>
          <Li>AGREGADAS RECIENTEMENTE</Li>
          <Li>POPULARES</Li>
          <Li>MIS PELÍCULAS</Li>
          <Li>MI LISTA</Li>
          {isMobile ? <Li style={{marginTop: "20px", fontWeight: "500"}} onClick={(e) => setIsClicked(true)}>
            <img src="./assets/mainPlus.svg" alt="plusSymbol" /> AGREGAR PELÍCULA
          </Li>
          :
          <Li style={{marginTop: "20px", fontWeight: "500"}} onClick={(e) => dropExitNav()}>
            <img src="./assets/mainPlus.svg" alt="plusSymbol" /> AGREGAR PELÍCULA
          </Li>}
          <Li style={{marginTop: "20px"}}>CERRAR SESIÓN</Li>
        </List>}
      </NavContainer>
    </MenuContainer>
  )
}