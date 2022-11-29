import React, { useState } from 'react';
import styled from 'styled-components';

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
`

const Input = styled.input`
  font-family: Bebas Neue;
  color: white;
  font-size: 18px;
  padding: 20px;
  letter-spacing: 4px;
  background-color: #242424;
  border: 1px solid #919191;

  &:hover{
    background-color: #919191;
    color: #242424;
  }
`


export const TextInput = () => {

  const [movieTitle, setMovieTitle] = useState("");

  function inputChangeHandler(evento) {
    // let inputTitle = evento.target.title;
    let value = evento.target.value;
    setMovieTitle(value)
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(movieTitle)

    if (localStorage.getItem("title",movieTitle) === null){
      localStorage.setItem("title", movieTitle)
    } else if(localStorage.getItem("title2",movieTitle) === null){
      localStorage.setItem("title2", movieTitle)
    } else if(localStorage.getItem("title3",movieTitle) === null){
      localStorage.setItem("title3", movieTitle)
    } else if(localStorage.getItem("title4",movieTitle) === null){
      localStorage.setItem("title4", movieTitle)
    } else {
      alert("limite de 4 peliculas")
    }
  }

  return (
      <FormContainer onSubmit={handleSubmit}>
        <InputText 
          minLength={3}
          maxLength={23}
          type="text"
          onChange={inputChangeHandler}
          placeholder='TÍTULO'
          value={movieTitle}
          name="title"
          required
          />
        <Input type="submit" placeholder='TÍTULO' value='SUBIR PELÍCULA'/>
        <Input type="button" value="SALIR"/>
      </FormContainer>
  )
}
