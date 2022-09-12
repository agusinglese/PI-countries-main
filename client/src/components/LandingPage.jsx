import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StartButton = styled.button`
  background-color: transparent;
  margin-top: 5rem;
  margin-left: 5rem;
  transition: all 0.5s;
  cursor: pointer;
  text-align: end;
  box-shadow: none;
  border: none;

  &:hover {
    box-shadow: 2px 4px 10px 4px #94d2bd;
    background-color: transparent;
  }
  @media (max-width: 800px) {
    margin: 5rem;
  }
`;
const P = styled.p`
  cursor: pointer;
  text-align: end;
  transition: 0.5s;
  color: black;
  padding-right: 3rem;
  font-size: 2rem;
  margin: 0;

  &:hover {
    //background-color: whitesmoke;
    color: #2ba1a3;
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

  @media (max-width: 1000px) {
    justify-content: space-around;
  }
`;

const Img = styled.img`
  height: 10rem;
  width: auto;

  @media only screen and (max-width: 300px) {
    height: 5rem;
    width: fit-content;
  }
  @media only screen and (min-width: 301px) and (max-width: 575px) {
    height: 7rem;
    width: fit-content;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    height: 8rem;
    width: fit-content;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 10rem;
    width: fit-content;
    margin-left: 0;
  } ;
`;

function LandingPage() {
  return (
    <Conteiner>
      <NavLink to="/home">
        <StartButton>
          <Img src="icon.png" alt="logo" />
          <P> 🡆</P>
        </StartButton>
      </NavLink>
    </Conteiner>
  );
}

export default LandingPage;
