import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Titles } from './components/Titles/Titles';
import { MainButtons } from './components/MainButtons/MainButtons';

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: Bebas Neue;

`

const Background = styled.div`
  position: absolute;
  z-index: -10;
  background-repeat: no-repeat;
  background-size: cover;
  height: 585px;
  width: 100%;
  background-image: url('./assets/Bkg.png');
  background-image:
  linear-gradient(180deg, rgba(24, 24, 24, 0) 70%, rgba(24,24,24,0.95) 95%, rgba(24, 24, 24, 1) 100%),
  url('./assets/Bkg.png');



`

function App() {
  return (
    <HomeContainer>
      <Background/>
      <Navbar/>
      <Titles/>
      <MainButtons/>
    </HomeContainer>
  );
}

export default App;
