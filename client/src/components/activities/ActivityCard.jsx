import styled from "styled-components";

const DivTag = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
  justify-content: center;
  margin: 1rem;
  background-color: whitesmoke;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  background-color: #94d2bd;
  border-radius: 0.5rem;
  padding: 1rem 0;
  margin-top: 0;
  margin-bottom: 0.1rem;
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
