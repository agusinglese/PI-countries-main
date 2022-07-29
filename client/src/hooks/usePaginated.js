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
    let prevPage = currentPage - 1;
    setCurrentPage(prevPage);
  };
  const nextHandler = () => {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const firstHandler = () => {
    setCurrentPage(1);
  };

  const lastHandler = (totalPages) => {
    setCurrentPage(totalPages);
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
    lastHandler,
    firstHandler,
  };
};
