import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { searchById } from "../../actions";

const DivTag = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: auto;
  justify-content: center;
  margin: 1rem;
  background-color: whitesmoke;
`;

const Conteiner = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Tags = styled.span`
  font-weight: bold;
  padding: 1rem 0;
`;

const SubTags = styled.div`
  padding: 0.2rem 0;
`;
const Title = styled.h3`
  background-color: red;
  padding: 1rem 0;
  margin-top: 0;
  margin-bottom: 0.1rem;
`;

const Img = styled.img`
  width: 3rem;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 3px;
`;

function ActivityCard({ dataActivity }) {
  const { name, duration, difficulty, season } = dataActivity;

  return (
    <Conteiner>
      <DivTag>
        <Title>{name}</Title>
        <SubTags>
          <Tags>Duration: </Tags>
          <span>{duration} hrs</span>
        </SubTags>
        <SubTags>
          <Tags>Difficulty: </Tags> <span>{difficulty}</span>
        </SubTags>
        <SubTags>
          <Tags>Season: </Tags> <span>{season}</span>
        </SubTags>
      </DivTag>
    </Conteiner>
  );
}

export default ActivityCard;
