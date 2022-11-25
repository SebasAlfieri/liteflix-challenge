import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: gray;
  font-family: Bebas Neue;
  background-image: url("./assets/Bkg.png");
  background-repeat: no-repeat;
`

function App() {
  return (
    <HomeContainer>
      <Navbar/>
    </HomeContainer>
  );
}

export default App;
