import React from 'react'
import styled from 'styled-components'
import Dropzone from '../Dropzone/Dropzone'
import { TextInput } from './TextInput'

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
`

const Title = styled.h2`
  color: #64EEBC;
  font-size: 22px;
`

export const MainContainer = () => {

  return (
    <Container>
      <Title>AGREGAR PELÍCULA</Title>
      <Dropzone/>
      <TextInput/>
    </Container>
  )
}

