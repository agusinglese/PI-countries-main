import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StartButton = styled.button`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Conteiner = styled.div`
  background-color: whitesmoke;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function LandingPage() {
  return (
    <Conteiner>
      <h1>Countries</h1>

      <NavLink to="/home">
        <StartButton>Start</StartButton>
      </NavLink>
    </Conteiner>
  );
}

export default LandingPage;
