import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StartButton = styled.button`
  background-color: #780b0b;
  color: whitesmoke;
  border-radius: 50%;
  margin-top: 10rem;
  box-shadow: 0 20px black;
  border: none;
  padding: 20px;
  width: 180px;
  height: 150px;
  transition: all 1s;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #780b0b80;
  }
  &:active {
    background-color: #460707;
    box-shadow: 0 3px black;
    transform: translateY(4px);
  }
`;

const Conteiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://img.freepik.com/fotos-premium/planeta-abstracto-sobre-fondo-banderas-mundo_476363-2635.jpg?w=2000);
`;

const Img = styled.img`
  height: 15vh;
  width: auto;
  margin: 1rem;
`;

function LandingPage() {
  return (
    <Conteiner>
      <Img src="icon.png" alt="logo" />
      <NavLink to="/home">
        <StartButton>LET'S GO!</StartButton>
      </NavLink>
    </Conteiner>
  );
}

export default LandingPage;
