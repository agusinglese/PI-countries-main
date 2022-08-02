import styled from "styled-components";

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  font-size: calc(3px + 2vmin);
  width: 100%;
  background-color: #94d2bd;
  align-items: center;
  padding: 0 2rem;
`;

const Simbolos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
function Footer() {
  return (
    <div>
      <FooterStyled>
        <h4>© Agustina Inglese</h4>
        <Simbolos>
          <a
            href="https://www.linkedin.com/in/agustina-inglese/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="linkedin.png" alt="Linkedin" height="40px" width="auto" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=393518158849&text=Hola!%20Me%20gustaria%20contactarte"
            rel="noreferrer"
            target="_blank"
          >
            <img src="whatsapp.png" alt="Linkedin" height="55px" width="auto" />
          </a>
        </Simbolos>
      </FooterStyled>
    </div>
  );
}

export default Footer;
