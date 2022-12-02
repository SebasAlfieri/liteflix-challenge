import React, { useContext } from 'react'
import styled from 'styled-components'
import Dropzone from '../Dropzone/Dropzone'
import { LoadBar } from './LoadBar'
import { TextInput } from './TextInput'
import { SuccesScreen } from './SuccesScreen'
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

  @media (min-width: 768px){
    position: inherit;
    width: 100%;
    height: 100%;
    padding: 0;
    align-self: center;
  }
`

const Title = styled.h2`
  color: #64EEBC;
  font-size: 22px;

  @media (min-width: 768px){
    margin-bottom: 50px;
  }
`

export const MainContainer = () => {

  const context = useContext(userContext);
  const { uploading, succes } = context;

  return (
    <Container>
      <Title>AGREGAR PELÍCULA</Title>
      {uploading ? <LoadBar/> : <Dropzone/>}
      <TextInput/>
      {succes && <SuccesScreen/>}
    </Container>
  )
}

