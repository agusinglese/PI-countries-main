import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StartButton = styled.button`
  background-color: transparent;
  margin-top: 5rem;
  margin-left: 5rem;
  transition: all 0.5s;
  cursor: pointer;
  font-size: 80px;
  text-align: center;
  box-shadow: none;
  border: none;

  &:hover {
    border-radius: 8rem;
    background-color: whitesmoke;
    padding-right: 25px;
  }
`;
const Span = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  color: transparent;
  text-align: center;

  &:hover {
    //background-color: whitesmoke;
    padding-right: 25px;
    color: black;
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
  height: 25vh;
  width: auto;
`;

function LandingPage() {
  return (
    <Conteiner>
      <NavLink to="/home">
        <StartButton>
          <Span>
            <Img src="icon.png" alt="logo" />
            🡆
          </Span>
        </StartButton>
      </NavLink>
    </Conteiner>
  );
}

export default LandingPage;
