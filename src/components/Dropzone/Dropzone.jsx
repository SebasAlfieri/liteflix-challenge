import React, { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { userContext } from '../../context/userContect'
import useIsMobile from '../../hooks/useIsMobile.ts'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 40px;
  border: 2px dashed white;
  padding: 20px;
  margin-top: -40px;
  cursor: pointer;
  &:hover{
    background-color: #3b3b3b;
  }

  @media (min-width: 768px){
    width: 400px;
    height: 55px;
    text-align: center;
  }

  @media (min-width: 1400px){
    width: 600px;
    height: 55px;
  }
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
  const context = useContext(userContext);
  const { userMovie } = context;
  
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const base64Str = reader.result
        const data = JSON.stringify(base64Str)
        userMovie.img = data
      }
      reader.readAsDataURL(file)
    })
  }, [userMovie])
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, maxFiles: 1,})
  const isMobile = useIsMobile();
  
  return (
    <Container {...getRootProps()}>
      <Input {...getInputProps()} />
      <TextIconContainer>
      {
        isDragActive ?
          <p>Suelta el archivo aquí</p> :
          <>
            <img src="./assets/dropzoneClip.svg" alt="clip" />

            {isMobile ? <p>Agregá un archivo</p> : <p>Agregá un archivo o arrastralo y soltalo aquí</p>}
            
          </>
      }
      </TextIconContainer>
    </Container>
  )
}

export default Dropzone