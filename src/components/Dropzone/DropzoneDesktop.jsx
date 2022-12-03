import React, { useContext } from 'react'
import { userContext } from '../../context/userContect'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MainContainer } from './MainContainer'

const Container = styled.div`
color: white;
font-family: Bebas Neue;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
background-color: #25252580;
z-index: 200;
letter-spacing: 4px;
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 350px;
  background-color: #242424;

  @media (min-width: 1400px){
    width: 730px;
    height: 440px;
  }
`

const DropDesktopExitBtn = styled.img`
  position: relative;
  width: 17px;
  height: 17px;
  margin-bottom: -17px;
  left: 270px;
  top: 25px;
  transition: 0.3s;

  @media (min-width: 1400px){
    left: 320px;
    top: 25px;
  }

  &:hover{
    transform: scale(1.2);
  }
`

export const DropzoneDesktop = () => {

  const context = useContext(userContext);
  const { dropzoneDesktop, exitDrop, setSucces, setUploading, setIsListo } = context;

  function Exit(){
    setSucces(false)
    exitDrop()
    setUploading(false)
    setIsListo(false)
  }

  return (
    <>
    {dropzoneDesktop &&
      <Container>
        <Background
        as={motion.div}
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1, transition:{duration: 0.3, delay: 0}}}>
          <DropDesktopExitBtn src='./assets/cerrar.svg' alt="cerrar menu" onClick={Exit}/>
          <MainContainer/>
        </Background>
      </Container>
    }
    </>
  )
}
