import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { searchById } from "../../actions";
import ActivityCard from "../activityCard/ActivityCard";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
`;

const SubConteiner = styled.div`
  margin: 0 20vw;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: baseline;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const Tags = styled.span`
  font-weight: bold;
  margin: 0.5rem;
  padding: 2rem 0;
`;

const SubTags = styled.div`
  padding: 0.3rem 0;
`;

const Img = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
`;

const Title = styled.h1`
  border: 1px solid red;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const Background = styled.div`
  background-color: red;
  margin-left: 20vw;
  width: 60vw;
`;

const ActTitle = styled.h3`
  background-color: red;
  padding: 1rem 0;
  margin: 1rem 20vw 0.1rem 20vw;
  width: 60vw;
`;

function CountryDetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countryDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(searchById(id));
  }, [dispatch]);
  console.log(data.activities);

  return (
    <div>
      <Link to="/home">
        <button>Back to home</button>
      </Link>
      <div>
        <Background>
          <Title>{data.name ? data.name.toUpperCase() : `Not found`}</Title>
          <Card>
            <div className="image-container">
              <Img src={data.flag} alt="flag" />
            </div>
            <Conteiner>
              <SubTags>
                <Tags>Capital : </Tags>
                <span>{data.capital ? data.capital : `Not found`}</span>
              </SubTags>
              <SubTags>
                <Tags>Population : </Tags>
                <span>
                  {data.population ? `${data.population} hab.` : `Not found`}
                </span>
              </SubTags>
              <SubTags>
                <Tags>Area : </Tags>
                <span>
                  {data.area
                    ? `${data.area / 1000000} million km2`
                    : `Not found`}
                </span>
              </SubTags>
              <SubTags>
                <Tags>Continent : </Tags>
                <span>{data.continent ? data.continent : `Not found`}</span>
              </SubTags>
              <SubTags>
                <Tags>Subregion : </Tags>
                <span>{data.subregion ? data.subregion : `Not found`}</span>
              </SubTags>
            </Conteiner>
          </Card>
        </Background>
        <div>
          {data.activities && data.activities.length ? (
            <ActTitle>Tourist Activities</ActTitle>
          ) : (
            <ActTitle>This country has no associated activities</ActTitle>
          )}
          <SubConteiner>
            {data.activities &&
              data.activities.map((act) => (
                <ActivityCard
                  tags={Tags}
                  subTags={SubTags}
                  key={act.id}
                  dataActivity={act}
                />
              ))}
          </SubConteiner>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
