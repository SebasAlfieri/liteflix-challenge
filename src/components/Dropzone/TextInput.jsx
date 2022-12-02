import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { userContext } from '../../context/userContect'
import useIsMobile from '../../hooks/useIsMobile.ts'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  gap: 30px;
`

const InputText = styled.input`
  font-family: Bebas Neue;
  background-color: #242424;
  color: white;
  border: none;
  text-align: center;
  font-size: 16px;
  letter-spacing: 4px;
  padding: 10px 0;
  border-bottom: 1px solid white;
  height: fit-content;
  margin-bottom: 50px;

  &::placeholder{
    color: white;
  }

  @media (min-width: 768px){
    margin-bottom: 20px;
  }
`

const Input = styled.input`
  font-family: Bebas Neue;
  color: #242424;
  font-size: 18px;
  padding: 20px;
  width: 100%;
  letter-spacing: 4px;
  background-color: white;
  border: 1px solid #919191;

  &:hover{
    background-color: #919191;
    color: #242424;
  }
`

const InputSalir = styled.input`
  font-family: Bebas Neue;
  color: white;
  font-size: 18px;
  padding: 20px;
  width: 100%;
  letter-spacing: 4px;
  background-color: #242424;
  border: 1px solid #919191;

  &:hover{
    background-color: white;
    color: #242424;
  }
`

const Toggle = styled.div`
  width: fit-content;
  height: fit-content;
  width: 250px;
  background-color: #fff;
`

export const TextInput = () => {

  const context = useContext(userContext);
  const { ExitNav, toggle, userMovie, moviesArray, localArray, setUploading, setUploadedName } = context;
  const [movieTitle, setMovieTitle] = useState("");
  const isMobile = useIsMobile();

  function inputChangeHandler(evento) {
    let value = evento.target.value;
    setMovieTitle(value)
  }

  function handleSubmit(event){
    event.preventDefault();
    userMovie.title = movieTitle

    if (userMovie.img !== ""){
      moviesArray.push(userMovie)
      localArray.push(userMovie)
      setUploadedName(userMovie.title)
      localStorage.setItem("userMovies", JSON.stringify(localArray))
      setUploading(true)

    } else {
      alert("Por favor suba una imagen")
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputText 
        minLength={3}
        maxLength={30}
        type="text"
        onChange={inputChangeHandler}
        placeholder='TÍTULO'
        value={movieTitle}
        name="title"
        required
        />
      <Input type="submit" placeholder='TÍTULO' value='SUBIR PELÍCULA'/>
      {isMobile && 
        <Toggle onClick={toggle}>
          <InputSalir type="button" value="SALIR" onClick={ExitNav}/>
        </Toggle>
      }
      
    </FormContainer>
  )
}