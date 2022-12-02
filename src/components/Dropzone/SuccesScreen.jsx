import React, { useContext } from 'react'
import styled from 'styled-components'
import { userContext } from '../../context/userContect'
import useIsMobile from '../../hooks/useIsMobile.ts'

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  left:0;
  top:0;
  height: 100vh;
  width: 100vw;
  padding-top: 30px;
  background-color: #242424;

  @media (min-width: 768px){
    width: 730px;
    height: 440px;
    padding-top: 0;
    right: auto;
    left: auto;
    top: unset;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
`

const Congrats = styled.p`
  font-size: 24px;
  font-weight: 700;
`

const Text = styled.p`
  font-size: 20px;
  line-height: 32px;
  text-align: center;
`

const Input = styled.input`
  font-family: Bebas Neue;
  color: #242424;
  font-size: 18px;
  padding: 20px;
  width: 248px;
  letter-spacing: 4px;
  background-color: white;
  border: 1px solid #919191;

  &:hover{
    background-color: #919191;
  }
`

export const SuccesScreen = () => {

  const context = useContext(userContext);
  const { uploadedName, setSucces, setMenuClicked, toggle, exitDrop, setIsListo } = context;
  const isMobile = useIsMobile();

  function ExitSucces(){
    setSucces(false)
    setMenuClicked(false)
    setIsListo(false)
  }

  function ExitSuccesDesktop(){
    setSucces(false)
    setIsListo(false)
    exitDrop()
  }

  return (
    <Container>
      <TextContainer>
        <Congrats>¡FELICITACIONES!</Congrats>
        <Text>{uploadedName} FUE CORRECTAMENTE SUBIDA.</Text>
      </TextContainer>
      {isMobile ? 
      <div onClick={toggle}>
      <Input type="button" value="IR A HOME" onClick={ExitSucces}/>
      </div>
      :
      <div onClick={toggle}>
      <Input type="button" value="IR A HOME" onClick={ExitSuccesDesktop}/>
      </div>
      }
      
    </Container>
  )
}
