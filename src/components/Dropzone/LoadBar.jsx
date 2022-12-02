import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { userContext } from '../../context/userContect'

const LoadContainer = styled.div`
  width: 350px;
  height: 40px;
  padding: 20px 0;
  margin-top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextCargando = styled.p`
  position: relative;
  font-size: 14px;
  margin: 0;
  padding: 0;
  width: 0;
  bottom: 30px;
  white-space: nowrap;

  @media (min-width: 768px){
    font-size: 16px;
  }
`

const TextListo = styled.p`
    position: relative;
    font-size: 14px;
    margin: 0;
    padding: 0;
    width: 0;
    bottom: -30px;
    left: 300px;
    white-space: nowrap;
    color: #64EEBC;
`

const BarsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`

const StaticBar = styled.div`
  background-color: #919191;
  height: 4px;
  width: 350px;

  @media (min-width: 768px){
      width: 600px
    }
`

const LoadingBar = styled.div`
  position: relative;
  bottom: 2px;
  background-color: #64EEBC;
  height: 8px;
  width: 0;
`

export const LoadBar = () => {

  const context = useContext(userContext);
  const { isListo, setIsListo, setSucces, setUploading } = context;

  let [counter, setCounter] = useState(0)

    useEffect(() => {
    const loop = setInterval(function(){

    if (counter === 101) {
      stopLoop()
      setIsListo(true)
      setSucces(true)
      setUploading(false)
    } else{
      setCounter(counter++)
    }
    }, 75);

  function stopLoop () {
    clearInterval(loop)
  }
}, []);



  return (
    <LoadContainer>
      <TextCargando>CARGANDO {counter}%</TextCargando>
      {isListo && <TextListo>¡LISTO!</TextListo>}
      <BarsContainer>
        <StaticBar><LoadingBar
          as={motion.div}
          initial={{ width: 0 }}
          animate={{ width: "100%"}}
          transition={{ delay: 0.1, duration: 4 }}/></StaticBar>
        
      </BarsContainer>
    </LoadContainer>
  )
}
