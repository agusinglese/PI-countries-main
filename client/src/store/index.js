import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_||compose;
//const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
export default store;
