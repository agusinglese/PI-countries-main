import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getActivities,
  getAllCountries,
  orderByName,
  
  orderByPopulation,
  filterCountries,
  
} from "../../actions";
import CountryCard from "../CountryCard";
import SearchBar from "../SearchBar";
import Paginated from "../Paginated";
import { usePaginated } from "../../hooks/usePaginated";
import styled from "styled-components";
import Loader from "../Loader";
import Header from "..//Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";

const DivTagCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Buttons = styled.button`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
const LegendTag = styled.legend`
  padding: 0.5rem 0;
  margin: 0 0 0.5rem 0;
  display: inline-block;
  font-weight: bold;
  line-height: 1;
`;

const SubConteiner = styled.div`
  width: 45vw;
`;

const Img = styled.img`
  width: auto;
  height: 1.5rem;
`;

const Conteiner = styled.div`
  border: 2px solid #d6eaf8;
  background-image: linear-gradient(whitesmoke, #21618c);
  box-shadow: 2px 1px #1b4f72;
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;
`;

function Home() {
  const { pathname } = useLocation();
  const { countries, activities, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filterActive, setFilterActive] = useState(false);
  const [filter, setFilter] = useState({ continent: "All", activity: "All" });
  const [loading, setLoading] = useState(false);
  const {
    positionOfTheFirstCountry,
    positionOfTheLastCountry,
    countriesPage,
    currentPage,
    pagine,
    setCurrentPage,
    prevHandler,
    nextHandler,
    firstHandler,
    lastHandler,
  } = usePaginated(countries);

  const currentCountries = countries.slice(
    positionOfTheFirstCountry,
    positionOfTheLastCountry
  );

  useEffect(() => {
    setLoading(true);
    dispatch(getAllCountries());
    dispatch(getActivities());
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterCountries(filter));

    setCurrentPage(1);
  }, [filter]);

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    setFilterActive(true);
  };

  //ORDER BY NAME
  const handleSort = (e) => {
    e.preventDefault(e);
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  };

  //ORDER BY POPULATION
  const handleSortPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
  };

  //DESACTIVAR FILTROS
  const handleBack = () => {
    setFilterActive(false);
    dispatch(getAllCountries());
    dispatch(getActivities());
    setCurrentPage(1);
    setFilter({ ...filter, continent: "All", activity: "All" });
  };

  return (
    <>
      {error.hasOwnProperty("err") && <ErrorMessage />}
      <Header pathname={pathname} />
      <div>
        <Conteiner>
          <br />
          <br />
          <br />
          <br />
          <h1>Countries</h1>
          <div>
            <SearchBar setFilterActive={setFilterActive} />
            <div>
              <DivTagCards>
                <SubConteiner>
                  <LegendTag>FILTER BY</LegendTag>
                  <div>
                    <select
                      name="continent"
                      value={filter.continent}
                      onChange={(e) => handleFilter(e)}
                    >
                      <option value="All">All continents</option>
                      <option value="Africa">Africa</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="North America">North America</option>
                      <option value="Oceania">Oceania</option>
                      <option value="South America">South America</option>
                    </select>
                    <select
                      value={filter.activity}
                      name="activity"
                      onChange={(e) => handleFilter(e)}
                    >
                      <option value="All">All activities</option>
                      {activities &&
                        activities.map((act, index) => (
                          <option key={index} value={act.name}>
                            {act.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </SubConteiner>
                <SubConteiner>
                  <LegendTag>ORDER BY</LegendTag>
                  <DivTagCards>
                    <div>
                      <label>Population</label>
                      <Buttons
                        value="asc"
                        onClick={(e) => {
                          handleSortPopulation(e);
                        }}
                      >
                        <Img src="asc.png" alt="1-9" />
                      </Buttons>
                      <Buttons
                        value="desc"
                        onClick={(e) => {
                          handleSortPopulation(e);
                        }}
                      >
                        <Img src="des.png" alt="9-1" />
                      </Buttons>
                    </div>
                    <div>
                      <label>Name</label>
                      <Buttons value="asc" onClick={(asc) => handleSort(asc)}>
                        <Img src="a-z.png" alt="A-Z" />
                      </Buttons>
                      <Buttons
                        value="desc"
                        onClick={(desc) => handleSort(desc)}
                      >
                        <Img src="z-a.png" alt="Z-A" />
                      </Buttons>
                    </div>
                  </DivTagCards>
                </SubConteiner>
              </DivTagCards>
            </div>
          </div>
          <br />
          <br />
        </Conteiner>
        <br />
        {loading && <Loader />}
        <Paginated
          totalCountries={countries.length}
          countriesPage={countriesPage}
          pagine={pagine}
          currentPage={currentPage}
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          firstHandler={firstHandler}
          lastHandler={lastHandler}
        />
        <div>
          {filterActive && <button onClick={() => handleBack()}>Back</button>}
          <DivTagCards>
            {currentCountries &&
              currentCountries.map((country) => (
                <CountryCard key={country.id} data={country} />
              ))}
          </DivTagCards>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
