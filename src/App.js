import './App.css';
import styled from "styled-components";
import Header from "./components/Header";
import Referee from './components/referee/Referee.jsx';

function App() {
  return (
    <Container>
      <Header/>
      <Referee/>
      
      <div className='footer'>
      </div>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .footer{
      /* padding-bottom: 20rem; */
    }
`;

export default App;
