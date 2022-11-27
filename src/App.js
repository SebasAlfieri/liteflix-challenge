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

var x = Math.floor(Math.random() * 7)

console.log(x)

function App() {
  return (
    <HomeContainer>
      <Background random={x}/>
      <Navbar/>
      <Titles random={x}/>
      <MainButtons/>
      <Popular/>
    </HomeContainer>
  );
}

export default App;
