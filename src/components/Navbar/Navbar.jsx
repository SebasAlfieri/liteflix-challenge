import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 60px;
  width: 100%;
  background-color: transparent;
  width: 90%;
`

const MenuIcon = styled.img`

`

const Title = styled.img`

`

const User = styled.img`
  border-radius: 50%;
`



export const Navbar = () => {
  return (
    <Container>
      <MenuIcon src='./assets/menu.svg'/>
      <Title src='./assets/title.svg'/>
      <User src='./assets/user.svg'/>
    </Container>
  )
}
