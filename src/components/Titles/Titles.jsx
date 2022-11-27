import React from 'react'
import styled from 'styled-components'

const TitlesContainer = styled.div`
height: 420px;
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-bottom: 10px;
`

const Subtitle = styled.p`
color: white;
font-size: 20px;
font-weight: 300;
letter-spacing: 4px;

span{
  font-weight: 500;
}
`

const Title = styled.h2`
color: #64EEBC;
font-weight: 700;
font-size: 76px;
line-height: 76px;
letter-spacing: 12px;
margin: 0;
`


export const Titles = () => {
  return (
    <TitlesContainer>
      <Subtitle>ORIGINAL DE <span>LITEFLIX</span></Subtitle>
      <Title>LA CASA DE PAPEL</Title>
    </TitlesContainer>
  )
}
