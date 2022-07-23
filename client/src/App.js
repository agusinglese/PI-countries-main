import "./App.css";
import Activity from "./components/Activity.jsx";
import CountryDetails from "./components/CountryDetails.jsx";
import Home from "./components/Home.jsx";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/country/:id" component={CountryDetails} />
        <Route exact path="/activities">
          <Activity />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
