import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../actions/index";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import styled from "styled-components";

const Conjunto = styled.div`
  background-color: aliceblue;
  padding: 1rem 0;
  margin: 0 25vw;
  margin-bottom: 11vh;
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

const DivTag = styled.div`
  align-items: baseline;
  padding: 0.1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Div2Tag = styled.form`
  width: 25vw;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const LiTag = styled.li`
  display: inline;
  padding: 0.5rem;
  list-style: none;
  float: left;
`;

const CloseBotton = styled.button`
  background-color: #ff6f6b;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.3rem;
  color: white;
  font-weight: none;
  line-height: 0.5;
  border: none;
`;

const UlTag = styled.ul`
  display: inline-block;
`;
const initialForm = {
  name: "",
  duration: "",
  difficulty: "",
  season: "",
  countries: [],
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/; //acepta letras y espacios, caracteres ajenos al ingles como la ñ

  //por cada input, se tiene un if anidado
  if (!form.name.trim()) {
    errors.name = "The 'name' is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The name only accepts letters and blanks";
  }
  if (!form.duration.trim()) {
    errors.duration = "The 'duration' of the activity is required";
  } else if (isNaN(form.duration)) {
    errors.duration = "The duration must be a number";
  }

  if (!form.difficulty) {
    errors.difficulty = "The 'difficulty' of the activity is required";
  } else if (form.difficulty < 1 || form.difficulty > 5) {
    errors.difficulty = "The difficulty must be a value between 1 and 5";
  }

  if (!form.season) {
    errors.season = "The 'season' is required";
  }

  if (form.countries.length === 0) {
    errors.countries = "At least one country is required";
  }

  return errors;
};

let style = {
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: "#dc3545",
};

function Activity() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDelete,
    handleChangeList,
  } = useForm(initialForm, validateForm);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  let orderCountries = allCountries.map((c) => c.name).sort();

  return (
    <Conjunto>
      <h2>Create a new tourist activity</h2>
      <form onSubmit={handleSubmit}>
        <DivTag>
          <div>
            <label>Name: </label>
          </div>
          <div>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>

          {errors.name && <p style={style}>{errors.name}</p>}
        </DivTag>
        <DivTag>
          <label>Duration(hrs): </label>
          <input
            type="number"
            name="duration"
            min="1"
            max="50"
            value={form.duration}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.duration && <p style={style}>{errors.duration}</p>}
        </DivTag>
        <DivTag>
          <label>Difficulty: </label>
          <Div2Tag>
            <label htmlFor="1">
              <input
                type="radio"
                name="difficulty"
                id="1"
                value="1"
                onChange={handleChange}
                onBlur={handleBlur}
                required
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
                onBlur={handleBlur}
                required
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
                onBlur={handleBlur}
                required
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
                onBlur={handleBlur}
                required
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
                onBlur={handleBlur}
                required
              />
              5
            </label>
          </Div2Tag>
          {errors.difficulty && <p style={style}>{errors.difficulty}</p>}
        </DivTag>
        <DivTag>
          <label>Season: </label>
          <select
            name="season"
            value={form.season}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          >
            <option value="">Select a season...</option>
            <option value="Invierno">Winter</option>
            <option value="Verano">Summer</option>
            <option value="Primavera">Spring</option>
            <option value="Otoño">Fall</option>
          </select>
          {errors.season && <p style={style}>{errors.season}</p>}
        </DivTag>
        <DivTag>
          <label>Countries: </label>
          <select
            name="countries"
            value={form.countries}
            onChange={handleChangeList}
          >
            <option value="">Select countries...</option>
            {allCountries &&
              orderCountries.map((el, index) => (
                <option key={index} value={el} size="10">
                  {el}
                </option>
              ))}
          </select>
          {errors.countries && <p style={style}>{errors.countries}</p>}
        </DivTag>

        {form.countries.length
          ? form.countries.map((e) => (
              <UlTag>
                <LiTag key={e}>
                  {e}
                  <CloseBotton onClick={() => handleDelete(e)}>X</CloseBotton>
                </LiTag>
              </UlTag>
            ))
          : []}
        <Buttons>
          <div>
            <Link to="/home">
              <button>Back to Home</button>
            </Link>
          </div>
          <div>
            <input type="submit" name="Send" value="Create Activity" />
          </div>
        </Buttons>
      </form>
    </Conjunto>
  );
}

export default Activity;
