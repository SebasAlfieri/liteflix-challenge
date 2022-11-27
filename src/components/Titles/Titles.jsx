import React, { useState, useEffect } from 'react'
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


export const Titles = (props) => {

  let { random } = props
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect (() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data)
      console.log(data)
    })
    .finally (() =>{
      setLoading(false);
    })
  },[])

  return (
    <TitlesContainer>
      <Subtitle>ORIGINAL DE <span>LITEFLIX</span></Subtitle>
      {loading ? "" : <Title>{data.results[random].original_title}</Title>}
    </TitlesContainer>
  )
}
