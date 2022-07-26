import Toggle from "../Toggle";
import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: calc(3px + 2vmin);
  color: white;
`;

function Header() {
  return (
    <HeaderStyle>
      <div>
        <h1>Countries App</h1>
      </div>
    </HeaderStyle>
  );
}

export default Header;
