import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ErrorStyled = styled.div`
  height: 80vh;
  display: flex;
  justify-items: center;
`;

const H3 = styled.h3`
  color: red;
  font-size: 1.5rem;
`;

const DivTag = styled.div`
  background-color: whitesmoke;
  margin: 0 20vw;
  padding: 1rem;
  width: 60vw;
  height: 40vh;
  margin-top: 2rem;
  border-radius: 2rem;
`;

function Error() {
  const { pathname } = useLocation();
  return (
    <ErrorStyled>
      <DivTag>
        <H3>Error 404: Page not found</H3>
        <p>
          {`The URL`}{" "}
          <b>{`https://pi-countries-main-iota.vercel.app${pathname}`}</b>{" "}
          {`doesn't exist`}
        </p>
        <br />
        <br />
        <a href="https://pi-countries-main-iota.vercel.app">
          <button>Back to home page</button>
        </a>
      </DivTag>
    </ErrorStyled>
  );
}

export default Error;
