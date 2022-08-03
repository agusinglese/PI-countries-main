import {
  GET_ACTIVITIES,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_COUNTRIES,
  HANDLE_ERROR,
  CONFIRM_ACTION,
  GET_ALL_COUNTRIES,
} from "../types";

//COUNTRIES
export const getAllCountries = () => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries`)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `Not found countries`,
            })
      )
      .then((data) => {
        dispatch({ type: GET_ALL_COUNTRIES, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: HANDLE_ERROR, payload: err });
      });
  };
};
export const searchByName = (name) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/countries?name=${name}`)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `Not found countries with the name "${name}"`,
            })
      )
      .then((data) => {
        dispatch({ type: SEARCH_COUNTRY_BY_NAME, payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: HANDLE_ERROR, payload: err });
      });
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

export const filterCountries = (filter) => {
  const { continent, activity } = filter;
  return function (dispatch) {
    return fetch(
      `http://localhost:3001/countries/filter?continent=${continent}&activity=${activity}`
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `Not found countries in "${continent}" with the activity "${activity}"`,
            })
      )
      .then((data) => {
        dispatch({ type: FILTER_COUNTRIES, payload: data });
      })
      .catch((err) => {
        dispatch({ type: HANDLE_ERROR, payload: err });
      });
  };
};

export const orderByName = (order) => ({
  type: ORDER_BY_NAME,
  payload: order,
});

export const orderByPopulation = (order) => ({
  type: ORDER_BY_POPULATION,
  payload: order,
});

//ACTIVITIES
export const postActivity = (activity) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/activities`, {
      method: "POST",
      body: JSON.stringify(activity),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: `Already exists an activity with the name ${activity.name}`,
            })
      )
      .then((data) => dispatch({ type: CONFIRM_ACTION, payload: data }))
      .catch((err) => dispatch({ type: HANDLE_ERROR, payload: err }));
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

export const putActivity = (data) => {
  console.log(data);
  return function (dispatch) {
    return fetch(`http://localhost:3001/activities/put`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              name: data.name,
              status: res.status || "00",
              statusText: `The activity was modified`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "Error404",
            })
      )
      .then((data) => dispatch({ type: CONFIRM_ACTION, payload: data }))
      .catch((err) => console.log(err));
  };
};

export const deleteActivity = (data) => {
  return function (dispatch) {
    return fetch(`http://localhost:3001/activities/delete/${data.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.ok
          ? Promise.resolve({
              name: data.name,
              status: res.status || "00",
              statusText: `The activity was deleted`,
            })
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: "Error404",
            })
      )
      .then((data) => dispatch({ type: CONFIRM_ACTION, payload: data }))
      .catch((err) => console.log(err));
  };
};
