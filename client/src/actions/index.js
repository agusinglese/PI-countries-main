import {
  ADD_ACTIVITY,
  GET_ALL_COUNTRIES,
  SEARCH_BY_ACTIVITY,
  SEARCH_BY_CONTINENT,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
} from "../types";

export const getAllCountries = () => {
  return function (dispatch) {
    //retorno una funcion que recibe el dispatch. Permite retornar una peticion asincrona
    return fetch(`http://localhost:3001/countries`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ALL_COUNTRIES, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const searchByName = (name) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SEARCH_COUNTRY_BY_NAME, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const searchById = (id) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SEARCH_COUNTRY_BY_ID, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const addActivity = (activity) => ({
  type: ADD_ACTIVITY,
  payload: activity,
});

export const searchContinent = (continent) => ({
  type: SEARCH_BY_CONTINENT,
  payload: continent,
});

export const searchByActivity = (activity) => ({
  type: SEARCH_BY_ACTIVITY,
  payload: activity,
});
