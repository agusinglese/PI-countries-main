import "./App.css";
import Activity from "./components/activity/Activity";
import CountryDetails from "./components/countryDetails/CountryDetails";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Header from "./components/header/Header";
import Error from "./components/error/Error";
import GlobalStyle from "./components/GlobalStyled";
import Footer from "./components/footer/Footer";
import Activities from "./components/Activities";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
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
            <Activity />
          </Route>
          <Route exact path="/activity">
            <Activities />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
