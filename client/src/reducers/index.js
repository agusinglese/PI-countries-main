import {
  POST_ACTIVITY,
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
  GET_ACTIVITIES,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  PUT_ACTIVITY,
  DELETE_ACTIVITY,
  FILTER_COUNTRIES,
  HANDLE_ERROR,
} from "../types";

const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: {},
  activities: [],
  error: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
    }
    case SEARCH_COUNTRY_BY_ID: {
      return { ...state, countryDetail: action.payload };
    }
    case SEARCH_COUNTRY_BY_NAME: {
      return { ...state, countries: action.payload };
    }
    case FILTER_COUNTRIES: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case POST_ACTIVITY: {
      return { ...state };
    }
    case GET_ACTIVITIES: {
      return { ...state, activities: action.payload };
    }

    case ORDER_BY_NAME: {
      let countriesSorted =
        action.payload === "asc"
          ? state.countries.sort((a, b) => a.name.localeCompare(b.name))
          : state.countries.reverse((a, b) => a.name.localeCompare(b.name));
      return { ...state, countries: countriesSorted };
    }
    case ORDER_BY_POPULATION: {
      let countriesSorted =
        action.payload === "asc"
          ? state.countries.sort((a, b) => a.population - b.population)
          : state.countries.reverse((a, b) => a.population - b.population);
      return { ...state, countries: countriesSorted };
    }
    case PUT_ACTIVITY: {
      return {
        ...state,
      };
    }
    case DELETE_ACTIVITY: {
      return {
        ...state,
      };
    }
    case HANDLE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
