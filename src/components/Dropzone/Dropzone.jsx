import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 300px;
  height: 40px;
  border: 2px dashed white;
  padding: 20px;
  margin-top: -40px
`

const Input = styled.input`
`

const TextIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
gap: 20px;

  img{
  }
`

function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const base64Str = reader.result
        const data = JSON.stringify(base64Str)
        
        if (localStorage.getItem("movie",data) === null){
          localStorage.setItem("movie", data)
        } else if(localStorage.getItem("movie2",data) === null){
          localStorage.setItem("movie2", data)
        } else if(localStorage.getItem("movie3",data) === null){
          localStorage.setItem("movie3", data)
        } else if(localStorage.getItem("movie4",data) === null){
          localStorage.setItem("movie4", data)
        } else {
          alert("limite de 4 peliculas")
        }
      }
      reader.readAsDataURL(file)
    })
  }, [])
  
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <Container {...getRootProps()}>
      <Input {...getInputProps()} />
      <TextIconContainer>
        <img src="./assets/dropzoneClip.svg" alt="" />
      <p>Agregá un archivo</p>
      </TextIconContainer>
    </Container>
  )
}

export default Dropzone