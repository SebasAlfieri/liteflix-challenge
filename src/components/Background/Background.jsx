import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BackgroundPic = styled.div`
  position: absolute;
  z-index: -10;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 585px;
  width: 100%;
  box-shadow: 0 -100px 100px 50px #242424 inset;

  @media (min-width: 576px){
    height: 100vh;
  }
`

const BackgroundTopShadow = styled.div`
  position: absolute;
  box-shadow: 0 50px 100px 0px #242424 inset;
  width: fit-content;
  height: fit-content;
  height: 585px;
  width: 100%;
  z-index: -9;

  @media (min-width: 576px){
    height: 100vh;
  }
`
export const Background = (props) => {

  const [data, setData] = useState("")
  const [loading, setLoading] = useState(true)
  let { random } = props

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
    <div>
    {loading ? "" : 
      <>
        <BackgroundTopShadow/>
        <BackgroundPic
        as={motion.div}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 7 }} 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.results[random].backdrop_path})`}}/>
      </>
      }
      
    </div>
  )
}


