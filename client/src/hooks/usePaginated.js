import { useState } from "react";

export const usePaginated = (countries) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPage, setCountriesPage] = useState(10);
  const positionOfTheLastCountry = currentPage * countriesPage;
  const positionOfTheFirstCountry = positionOfTheLastCountry - countriesPage;

  const pagine = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevHandler = () => {
    if (currentPage > 1) {
      let prevPage = currentPage - 1;
      setCurrentPage(prevPage);
    }
  };
  const nextHandler = () => {
    if (currentPage < countries.length - 1) {
      let nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      console.log("pag", currentPage);
    }
  };

  return {
    positionOfTheFirstCountry,
    positionOfTheLastCountry,
    pagine,
    countriesPage,
    setCurrentPage,
    currentPage,
    prevHandler,
    nextHandler,
  };
};
