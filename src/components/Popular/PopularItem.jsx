import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 350px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 -20px 30px 5px #242424 inset;
  margin-bottom: 20px;
`

const InnerItems = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 100%;
`

const Play = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 140px;
width: 100%;

  img{
    position: relative;
    top: 13px;
  }
`

const Title = styled.h4`
height: 60px;
width: 100%;
color: white;
font-weight: 400;
margin: 0;
text-align: center;
letter-spacing: 4px;
font-size: 16px;
max-width: 300px;
line-height: 25px;
`

export const PopularItem = (props) => {
  let { bg, title } = props

  return (
    <ItemContainer style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${bg}')`}}>
      <InnerItems>
        <Play> <img src='./assets/itemPlay.svg'/> </Play>
        <Title>{title}</Title>
      </InnerItems>
    </ItemContainer>
  )
}
