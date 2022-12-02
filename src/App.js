import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import styled from 'styled-components';
import { Titles } from './components/Titles/Titles';
import { MainButtons } from './components/MainButtons/MainButtons';
import { Popular } from "./components/Popular/Popular"
import { Background } from './components/Background/Background';
import { DropzoneDesktop } from './components/Dropzone/DropzoneDesktop';
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
    justify-content: space-between;
    align-items: flex-end;
    height: 85vh;
    padding: 0 10px;
  }

  @media (min-width: 768px){
    padding: 0 30px;
  }

  @media (min-width: 992px){
    justify-content: space-between;
    padding: 0 60px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;

  @media (min-width: 768px){
    margin-bottom: 30px;
  }
`

var x = Math.floor(Math.random() * 7)

function App() {


  return (
    <UserContextProvider>
      <DropzoneDesktop/>
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
