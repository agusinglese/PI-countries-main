import {
  POST_ACTIVITY,
  SEARCH_COUNTRY_BY_ID,
  SEARCH_COUNTRY_BY_NAME,
  GET_ACTIVITIES,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  PUT_ACTIVITY,
  DELETE_ACTIVITY,
  FILTER_COUNTRIES,
  HANDLE_ERROR,
  CONFIRM_ACTION,
} from "../types";

const initialState = {
  countries: [],
  countryDetail: {},
  activities: [],
  msgError: {},
  msgConfirm: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
      let countriesSorted = state.countries;
      if (action.payload === "ascAZ") {
        countriesSorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "descZA") {
        console.log("descZA", action.payload);
        countriesSorted.reverse((a, b) => a.name.localeCompare(b.name));
      }

      return { ...state, countries: countriesSorted };
    }
    case ORDER_BY_POPULATION: {
      let countriesSorted =
        action.payload === "ascPop"
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
        msgError: action.payload,
      };
    }
    case CONFIRM_ACTION: {
      return {
        ...state,
        msgConfirm: action.payload,
      };
    }
    default:
      return state;
  }
};
