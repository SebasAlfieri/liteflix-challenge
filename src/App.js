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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px){
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    height: 85vh;
  }

  @media (min-width: 768px){
    padding: 0 30px;
  }

  @media (min-width: 992px){
    justify-content: space-between;
    padding: 0 80px;
  }
`

const TitleContainer = styled.div`

`

var x = Math.floor(Math.random() * 7)

function App() {
  return (
    <UserContextProvider>
      <HomeContainer>
        <Background random={x}/>
        <Navbar/>
        <FlexContainer>
          <TitleContainer>
            <Titles random={x}/>
            <MainButtons/>
          </TitleContainer>
          <Popular/>
        </FlexContainer>
      </HomeContainer>
    </UserContextProvider>
  );
}

export default App;
