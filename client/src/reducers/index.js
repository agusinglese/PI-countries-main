import {
  ADD_ACTIVITY,
  GET_ALL_COUNTRIES,
  SEARCH_BY_ACTIVITY,
  SEARCH_BY_CONTINENT,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
} from "../types";

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES: {
      return { ...state, countries: action.payload };
    }
    case SEARCH_COUNTRY_BY_ID: {
      return { ...state, countryDetail: action.payload };
    }
    case SEARCH_COUNTRY_BY_NAME: {
      return { ...state, countries: action.payload };
    }
    case SEARCH_BY_ACTIVITY: {
      return {};
    }
    case SEARCH_BY_CONTINENT: {
      let countriesByContinent = state.countries.filter(
        (e) => e.continent === action.payload
      );
      return { ...state, countries: countriesByContinent };
    }
    case ADD_ACTIVITY: {
      return { ...state, activities: action.payload };
    }

    default:
      return state;
  }
};
