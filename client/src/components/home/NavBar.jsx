import styled from "styled-components";
import SearchBar from "./SearchBar";
import { orderByName, orderByPopulation, filterCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DivTagCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  } ;
`;

const SubConteiner = styled.div`
  width: 45vw;
  @media only screen and (max-width: 575px) {
    width: 90%;
    margin-top: 1.5rem;
  }
`;

const Conteiner = styled.div`
  background-color: #94d2bd;
  box-shadow: 2px 4px 1px #2ba1a3;
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;
  @media only screen and (max-width: 575px) {
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    border-bottom-left-radius: 6rem;
    border-bottom-right-radius: 6rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    border-bottom-left-radius: 8rem;
    border-bottom-right-radius: 8rem;
  } ;
`;

function NavBar({ setFilterActive, setCurrentPage, filter, handleFilter }) {
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCountries(filter));
    setCurrentPage(1);
  }, [filter, dispatch]);

  //ORDER BY NAME
  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.name));
    setCurrentPage(1);
  };

  //ORDER BY POPULATION
  const handleSortPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.name));
    setCurrentPage(1);
  };

  return (
    <Conteiner>
      <br />
      <h1>COUNTRIES</h1>
      <div>
        <SearchBar setFilterActive={setFilterActive} />
        <div>
          <DivTagCards>
            <SubConteiner>
              <legend>FILTER BY</legend>
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
              <legend>ORDER BY</legend>
              <DivTagCards>
                <div>
                  <label>Population</label>
                  <input
                    type="submit"
                    value="▼"
                    name="ascPop"
                    onClick={(e) => {
                      handleSortPopulation(e);
                    }}
                  />

                  <input
                    type="submit"
                    value="▲"
                    name="descPop"
                    onClick={(e) => {
                      handleSortPopulation(e);
                    }}
                  />
                </div>
                <div>
                  <label>Name</label>
                  <input
                    type="submit"
                    value="▼ A-Z"
                    name="ascAZ"
                    onClick={(e) => handleSort(e)}
                  />

                  <input
                    type="submit"
                    value="▲ Z-A"
                    name="descZA"
                    onClick={(e) => handleSort(e)}
                  />
                </div>
              </DivTagCards>
            </SubConteiner>
          </DivTagCards>
        </div>
      </div>
      <br />
      <br />
    </Conteiner>
  );
}

export default NavBar;
