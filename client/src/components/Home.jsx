import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCountries } from "../actions";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

function Home() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllCountries());
    setLoading(false);
  }, [dispatch]);

  return (
    <div>
      <SearchBar /> {/*nose como se hace*/}
      <h1>Countries</h1>
      <article className="box grid-responsive">
        {countries.map((country) => (
          <CountryCard key={country.id} data={country} />
        ))}
      </article>
    </div>
  );
}

export default Home;
