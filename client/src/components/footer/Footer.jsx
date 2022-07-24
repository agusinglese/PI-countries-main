import styled from "styled-components";

const FooterStyled = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: #282c34;
  min-height: 10vh;
  justify-content: center;
  font-size: calc(3px + 2vmin);
  color: white;
`;

function Footer() {
  return (
    <div>
      <FooterStyled>
        <h5>2022 | Agustina Inglese</h5>
      </FooterStyled>
    </div>
  );
}

export default Footer;
