import React, { useContext } from 'react'
import styled from 'styled-components'
import { userContext } from '../../context/userContect'

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
  color: white;
  font-size: 18px;
  padding: 20px;
  width: 248px;
  letter-spacing: 4px;
  background-color: #242424;
  border: 1px solid #919191;

  &:hover{
    background-color: white;
    color: #242424;
  }
`

export const SuccesScreen = () => {

  const context = useContext(userContext);
  const { uploadedName, setSucces, setMenuClicked, toggle } = context;

  function ExitSucces(){
    setSucces(false)
    setMenuClicked(false)
  }

  return (
    <Container>
      <TextContainer>
        <Congrats>¡FELICITACIONES!</Congrats>
        <Text>{uploadedName} FUE CORRECTAMENTE SUBIDA.</Text>
      </TextContainer>
      <div onClick={toggle}>
        <Input type="button" value="holaa" onClick={ExitSucces}/>
      </div>
    </Container>
  )
}
