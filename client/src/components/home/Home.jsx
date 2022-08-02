import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getActivities } from "../../actions";
import CountryCard from "./CountryCard";
import Paginated from "./Paginated";
import { usePaginated } from "../../hooks/usePaginated";
import styled from "styled-components";
import Loader from "../Loader";
import Header from "../Header";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import NavBar from "./NavBar";

const DivTagCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

function Home() {
  const { pathname } = useLocation();
  const { countries, msgError } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filterActive, setFilterActive] = useState(false);
  const [filter, setFilter] = useState({ continent: "All", activity: "All" });
  const [loading, setLoading] = useState(true);
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
    dispatch(getActivities());
    setLoading(false);
  }, [dispatch]);

  const handleFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    setFilterActive(true);
  };

  //DESACTIVAR FILTROS
  const handleBack = () => {
    setLoading(true);
    setFilterActive(false);
    dispatch(getActivities());
    setCurrentPage(1);
    setFilter({ ...filter, continent: "All", activity: "All" });
    setLoading(false);
  };

  return (
    <>
      {msgError.hasOwnProperty("err") && <ErrorMessage />}
      <Header pathname={pathname} />
      <div>
        <NavBar
          filter={filter}
          handleFilter={handleFilter}
          setCurrentPage={setCurrentPage}
          setFilterActive={setFilterActive}
        />
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
