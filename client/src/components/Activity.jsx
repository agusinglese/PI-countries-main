import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, addActivity } from "../actions/index";

function Activity() {
  const dispatch = useDispatch();
  const countriesTotal = useSelector((state) => state.countries);
  const [form, setForm] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  let orderCountries = countriesTotal.map((c) => c.name).sort();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeList = (e) => {
    setForm({ ...form, [e.target.name]: [...form.countries, e.target.value] });
  };

  //falta conectar con el back
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addActivity(form));
    handleReset();
  };

  const handleReset = () => {
    setForm({});
  };

  const handleDelete = (country) => {
    setForm({
      ...form,
      countries: form.countries.filter((c) => c !== country),
    });
  };

  return (
    <div>
      <h3>Create a new tourist activity</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duration: </label>
          <input
            type="number"
            name="duration"
            min="1"
            max="10"
            value={form.duration}
            onChange={handleChange}
          />
          <label> hrs</label>
        </div>
        <div>
          <legend>Difficulty: </legend>

          <label htmlFor="1">
            <input
              type="radio"
              name="difficulty"
              id="1"
              value="1"
              onChange={handleChange}
            />
            1
          </label>

          <label htmlFor="2">
            <input
              type="radio"
              name="difficulty"
              id="2"
              value="2"
              onChange={handleChange}
            />
            2
          </label>

          <label htmlFor="3">
            <input
              type="radio"
              name="difficulty"
              id="3"
              value="3"
              onChange={handleChange}
            />
            3
          </label>

          <label htmlFor="4">
            <input
              type="radio"
              name="difficulty"
              id="4"
              value="4"
              onChange={handleChange}
            />
            4
          </label>

          <label htmlFor="5">
            <input
              type="radio"
              name="difficulty"
              id="5"
              value="5"
              onChange={handleChange}
            />
            5
          </label>
        </div>
        <div>
          <label>Season: </label>
          <select name="season" value={form.season} onChange={handleChange}>
            <option value="">Choose a season</option>
            <option value="Invierno">Winter</option>
            <option value="Verano">Summer</option>
            <option value="Primavera">Spring</option>
            <option value="Otoño">Fall</option>
          </select>
        </div>
        <div>
          <label>Countries</label>
          <select
            name="countries"
            value={form.countries}
            onChange={handleChangeList}
          >
            <option value="">Select the countries</option>
            {countriesTotal &&
              orderCountries.map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
          </select>

          {form.countries.length
            ? form.countries.map((e) => (
                <ul>
                  <li key={e}>
                    {e}
                    <button onClick={() => handleDelete(e)}>X</button>
                  </li>
                </ul>
              ))
            : []}
        </div>
        <div>
          <input type="submit" name="Send" value="Create" />
        </div>
      </form>
    </div>
  );
}

export default Activity;

/*
<label htmlFor={id}>{label}</label>;
{
  loading && <Loader />;
}
<select name={id} id={id} onChange={handleChange}>
  <option value="">Elige un {title}</option>
  {data &&
    options.map((el) => (
      <option key={el} value={el}>
        {el}
      </option>
    ))}
</select>;*/
