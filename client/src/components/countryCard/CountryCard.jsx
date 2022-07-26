import { Link } from "react-router-dom";
import styled from "styled-components";

const DivTag = styled.div`
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 40vh;
  justify-content: center;
  margin: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    background-color: whitesmoke;
  }
`;

const ImgTag = styled.img`
  width: 170px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover,
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #444;
  }
`;

function CountryCard({ data }) {
  const { id, flag, continent, name } = data;
  return (
    <DivTag>
      <StyledLink to={`/country/${id}`}>
        <div>
          <ImgTag src={flag} alt="flag" />
        </div>
        <div>
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <p>{continent}</p>
          </div>
        </div>
      </StyledLink>
    </DivTag>
  );
}

export default CountryCard;
