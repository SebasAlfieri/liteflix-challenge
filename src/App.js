import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Titles } from './components/Titles/Titles';
import { MainButtons } from './components/MainButtons/MainButtons';
import { Popular } from "./components/Popular/Popular"
import { Background } from './components/Background/Background';

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: Bebas Neue;
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
