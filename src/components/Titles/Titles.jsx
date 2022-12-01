import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TitlesContainer = styled.div`
  height: 420px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;

  @media (min-width: 576px){
    height: fit-content;
    align-items: flex-start;
  }
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

  @media (min-width: 576px) {
    font-size: 50px;
    line-height: 50px;
    text-align: start;
  }

  @media (min-width: 768px) {
    font-size: 76px;
    line-height: 76px;
    margin-top: 0px;
    margin-bottom: 30px;
  }

  @media (min-width: 992px) {
    font-size: 76px;
    line-height: 76px;
    margin-top: 0px;
    margin-bottom: 30px;
    max-width: 1000px;
  }

  @media (min-width: 1400px) {
    font-size: 120px;
    line-height: 100px;
    margin-top: 0px;
    margin-bottom: 30px;
  }
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
    })
    .finally (() =>{
      setLoading(false);
    })
  },[])

  return (
    <TitlesContainer>
      <Subtitle
      as={motion.p}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2,  type: 'tween' }} >ORIGINAL DE <span>LITEFLIX</span></Subtitle>
      {loading ? "" : <Title
      as={motion.div}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2,  type: 'tween' }} >{data.results[random].original_title}</Title>}
    </TitlesContainer>
  )
}
