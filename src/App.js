import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Titles } from './components/Titles/Titles';
import { MainButtons } from './components/MainButtons/MainButtons';
import { Popular } from "./components/Popular/Popular"
import { Background } from './components/Background/Background';
import UserContextProvider from './context/userContect';

const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: Bebas Neue;
`

var x = Math.floor(Math.random() * 7)

function App() {
  return (
    <UserContextProvider>
      <HomeContainer>
        <Background random={x}/>
        <Navbar/>
        <Titles random={x}/>
        <MainButtons/>
        <Popular/>
      </HomeContainer>
    </UserContextProvider>
  );
}

export default App;
