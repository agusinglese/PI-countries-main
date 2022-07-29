import CountryDetails from "./components/pages/CountryDetails";
import Home from "./components/pages/Home";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";

import Error from "./components/pages/Error";
import GlobalStyle from "./components/GlobalStyled";
import Activities from "./components/pages/Activities";

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
