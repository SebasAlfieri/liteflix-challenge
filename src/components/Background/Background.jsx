import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const BackgroundPic = styled.div`
  position: absolute;
  z-index: -10;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 585px;
  width: 100%;
  box-shadow: 0 -100px 100px 10px #242424 inset;
`

export const Background = () => {

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
    <div>
    {loading ? "" : <BackgroundPic style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.results[0].poster_path})`}}/>}
    </div>
  )
}


