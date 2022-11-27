import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Titles } from './components/Titles/Titles';
import { MainButtons } from './components/MainButtons/MainButtons';
import { Popular } from "./components/Popular/Popular"

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: Bebas Neue;
`

const Background = styled.div`
  position: absolute;
  z-index: -10;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 585px;
  width: 100%;
  background-image: url('./assets/Bkg.svg');
  /* background-image:
  linear-gradient(180deg, rgba(24, 24, 24, 0) 70%, rgba(24,24,24,0.95) 90%, rgba(24, 24, 24, 1) 90%, rgba(24, 24, 24, 1) 100%),
  url('./assets/Bkg.png'); */
  box-shadow: 0 -100px 100px 10px #242424 inset;
`

function App() {
  return (
    <HomeContainer>
      <Background/>
      <Navbar/>
      <Titles/>
      <MainButtons/>
      <Popular/>
    </HomeContainer>
  );
}

export default App;
