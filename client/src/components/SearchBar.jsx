import { searchByName } from "../actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SearchBar() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch;
  const activities = useSelector((state) => state.activities);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    //setear al estado local form con el valor que capto del input
  };
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchByName(form.name));
  };

  const handleFilterContinent = () => {};
  const handleFilterActivities = () => {};
  return (
    <div>
      <form className="form-container">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter country name"
            value={form.name}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="dropdown">
          <label htmlFor="continents">Select a continent:</label>
          <select name="continents" onChange={handleFilterContinent}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="activities">Activities:</label>
          <select name="activities" onChange={handleFilterActivities}>
            <option value="All">All</option>
            {activities &&
              activities.map((act, index) => (
                <option key={index} value={act.name}>
                  {act.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <legend>Order by: </legend>
          <label>Population</label>
          <button>Flecha arriba</button>
          <button>Flecha abajo</button>
          <label>Name</label>
          <button>A-Z</button>
          <button>Z-A</button>
        </div>
      </form>
      <NavLink to="/activities">
        <button>New Activity</button>
      </NavLink>
    </div>
  );
}

export default SearchBar;
