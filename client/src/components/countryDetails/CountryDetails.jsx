import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useLocation } from "react-router-dom";
import { searchById } from "../../actions";
import ActivityCard from "../activities/ActivityCard";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;

  @media only screen and (max-width: 575px) {
    margin: 1rem;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  } ;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 575px) {
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
`;
const SubConteiner = styled(Layout)`
  margin: 0 20vw;
  width: 60vw;
  align-items: baseline;
`;

const Card = styled(Layout)`
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
  background-color: whitesmoke;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  box-shadow: 1px 1px gray;

  @media only screen and (max-width: 575px) {
    width: 90%;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
`;

const Title = styled.h1`
  padding-top: 1rem;
  margin: 1rem 0 0 0;
  border: none;
  font-size: calc(1vw + 2em);
  @media only screen and (max-width: 575px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 2.5rem;
  }
`;

const Background = styled.div`
  background-color: #94d2bd;
  margin-left: 20vw;
  width: 60vw;
  border-radius: 1rem;
  margin-top: 5rem;
  box-shadow: 1px 1px 3px 1px;

  @media only screen and (max-width: 575px) {
    width: 80%;
    margin-left: 10%;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    margin-left: 10%;
  }
`;

const ActTitle = styled.h3`
  background-color: #94d2bd;
  border-radius: 1rem;
  padding: 1rem 0;
  margin: 1rem 20vw 0.1rem 20vw;
  width: 60vw;
  letter-spacing: 3px;
  box-shadow: 1px 1px 3px 1px;
  @media only screen and (max-width: 575px) {
    width: 80%;
    margin: 1rem 10% 0.1rem 10%;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    margin: 1rem 10% 0.1rem 10%;
  }
`;

function CountryDetails() {
  const { pathname } = useLocation();
  console.log(pathname);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countryDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(searchById(id));
  }, [dispatch]);

  //Formato poblacion
  const toNumber = (number) => {
    let aux = number.toString().split("").reverse();
    let numberPopulation = [];
    for (let i = 0; i < aux.length; i++) {
      if (i !== 0 && i % 3 === 0) {
        numberPopulation.push(".");
      }
      numberPopulation.push(aux[i]);
    }
    return numberPopulation.reverse().join("");
  };

  return (
    <>
      <div>
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
                    {data.population
                      ? `${toNumber(data.population)} pop.`
                      : `Not found`}
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
                  <Tags>Timezones : </Tags>
                  <span>{data.timezones ? data.timezones : `Not found`}</span>
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
              <ActTitle>TOURIST ACTIVITIES</ActTitle>
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
        <br />
        <Link to="/home">
          <button>Back to home</button>
        </Link>
      </div>
    </>
  );
}

export default CountryDetails;
