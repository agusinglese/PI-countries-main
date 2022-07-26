import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  getActivities,
  getAllCountries,
  orderByName,
  searchByActivity,
  searchContinent,
  orderByPopulation,
} from "../../actions";
import CountryCard from "../countryCard/CountryCard";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import Paginated from "../paginated/Paginated";
import { usePaginated } from "../../hooks/usePaginated";
import styled from "styled-components";
import Loader from "../Loader";

const DivTagCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
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
  margin: 0;
`;
function Home() {
  const { countries, activities } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filterActive, setFilterActive] = useState(false);
  const [order, setOrder] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    positionOfTheFirstCountry,
    positionOfTheLastCountry,
    countriesPage,
    pagine,
    setCurrentPage,
    currentPage,
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

  const handleFilterContinent = (e) => {
    dispatch(searchContinent(e.target.value));
    setCurrentPage(1);
    setFilterActive(true);
  };
  //no funciona
  const handleFilterActivities = (e) => {
    dispatch(searchByActivity(e.target.value));
    setFilterActive(true);
  };

  //ORDER BY NAME
  const handleSort = (e) => {
    e.preventDefault(e);
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder("Okey");
  };

  //ORDER BY POPULATION
  const handleSortPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder("Okey");
  };

  const handleBack = () => {
    setFilterActive(false);
    dispatch(getAllCountries());
    dispatch(getActivities());
    setCurrentPage(1);
  };
  return (
    <div>
      <h1>Countries</h1>
      <Link to="/activities">
        <button>New Activity</button>
      </Link>
      <div>
        <SearchBar setFilterActive={setFilterActive} />
        <div>
          <DivTagCards>
            <SubConteiner>
              <LegendTag>FILTER BY</LegendTag>
              <div>
                <select
                  name="continents"
                  onChange={(e) => handleFilterContinent(e)}
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
                  name="activities"
                  onChange={(e) => handleFilterActivities(e)}
                >
                  <option value="All">All activities</option>
                  {activities &&
                    activities.map((act, index) => (
                      <option key={index} value={act.id}>
                        {act.name}
                      </option>
                    ))}
                </select>
              </div>
            </SubConteiner>
            <SubConteiner>
              <LegendTag>ORDER BY</LegendTag>
              <div>
                <label>Population</label>
                <button
                  value="asc"
                  onClick={(e) => {
                    handleSortPopulation(e);
                  }}
                >
                  Flecha abajo
                </button>
                <button
                  value="desc"
                  onClick={(e) => {
                    handleSortPopulation(e);
                  }}
                >
                  Flecha arriba
                </button>
                <label>Name</label>
                <button value="asc" onClick={(asc) => handleSort(asc)}>
                  A-Z
                </button>
                <button value="desc" onClick={(desc) => handleSort(desc)}>
                  Z-A
                </button>
              </div>
            </SubConteiner>
          </DivTagCards>
        </div>
      </div>
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
  );
}

export default Home;
