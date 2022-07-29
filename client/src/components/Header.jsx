import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  z-index: 1;

  width: 100%;
`;

const Links = styled(Link)`
  text-decoration: none;
`;

const Img = styled.img`
  height: 15vh;
  width: auto;
  margin: 1rem;
  z-index: 1;
`;

function Header({ pathname }) {
  let active = pathname === "/activities" ? false : true;
  return (
    <HeaderStyle>
      <div>
        <Links to="/home">
          <Img src="icon.png" alt="logo" />
        </Links>
      </div>
      <div>
        {active && (
          <Link to="/activities">
            <button>Tourists Activities</button>
          </Link>
        )}
      </div>
    </HeaderStyle>
  );
}

export default Header;
