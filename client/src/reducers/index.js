import {
  POST_ACTIVITY,
  GET_ALL_COUNTRIES,
  SEARCH_BY_ACTIVITY,
  SEARCH_BY_CONTINENT,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
  GET_ACTIVITIES,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
} from "../types";

const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: {},
  activities: [],
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
    case SEARCH_BY_ACTIVITY: {
      let searchCountry = state.activities.filter(
        (e) => e.name === action.payload
      );
      console.log(searchCountry);
      return {
        ...state,
        countries: searchCountry,
      };
    }
    case SEARCH_BY_CONTINENT: {
      let allCountries = state.allCountries;
      let countriesByContinent =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((e) => e.continent === action.payload);
      return {
        ...state,
        countries: countriesByContinent,
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
    default:
      return state;
  }
};
