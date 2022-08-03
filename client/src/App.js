import CountryDetails from "./components/countryDetails/CountryDetails";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Error from "./components/Error";
import GlobalStyle from "./components/GlobalStyled";
import Activities from "./components/activities/Activities";

function App() {
  return (
    <>
      <GlobalStyle />

      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/country/:id" component={CountryDetails} />
          <Route exact path="/activities">
            <Activities />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
