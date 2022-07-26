import {
  GET_ACTIVITIES,
  GET_ALL_COUNTRIES,
  SEARCH_BY_ACTIVITY,
  SEARCH_BY_CONTINENT,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
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

export const postActivity = (activity) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/activities`, {
      method: "POST",
      body: JSON.stringify(activity),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
};

export const getActivities = () => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/activities`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_ACTIVITIES, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const searchContinent = (continent) => ({
  type: SEARCH_BY_CONTINENT,
  payload: continent,
});

export const searchByActivity = (idActivity) => ({
  type: SEARCH_BY_ACTIVITY,
  payload: idActivity,
});

export const orderByName = (order) => ({
  type: ORDER_BY_NAME,
  payload: order,
});
export const orderByPopulation = (order) => ({
  type: ORDER_BY_POPULATION,
  payload: order,
});
