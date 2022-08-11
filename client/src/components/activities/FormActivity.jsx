import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, filterCountries } from "../../actions/index";

import styled from "styled-components";

const Conjunto = styled.div`
  background-color: #94d2bd;
  border-radius: 1rem;
  padding: 1rem 0;
  margin: 0 25vw;
  margin-bottom: 3vh;
  display: flex;
  flex-direction: column;
  width: 50vw;
  box-shadow: 1px 1px 3px 1px;

  @media only screen and (max-width: 575px) {
    width: 90vw;
    margin: 0 5vw;
    margin-bottom: 3vh;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 70vw;
    margin: 0 15vw;
    margin-bottom: 3vh;
  } ;
`;

const DivTag = styled.div`
  align-items: baseline;
  justify-items: space-evenly;
  padding: 0.1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
`;

const Div2Tag = styled.form`
  width: 20vw;
  @media only screen and (max-width: 575px) {
    width: 90%;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    width: 70%;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 70%;
  }
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

const Error = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: #dc3545;
`;
let style = {
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: "#dc3545",
};

function FormActivity({
  handleBlur,
  handleSubmit,
  handleChangeList,
  handleChange,
  handleDelete,
  form,
  errors,
  postActive,
  putActive,
  deleteActive,
  sendData,
}) {
  const dispatch = useDispatch();
  const { countries, activities } = useSelector((state) => state);

  useEffect(() => {
    let filter = { continent: "All", activity: "All" };
    dispatch(filterCountries(filter));
    dispatch(getActivities());
  }, [dispatch]);

  let orderCountries = countries.sort((a, b) => a.name.localeCompare(b.name));

  const handleSelectActivity = (e) => {
    const selectActivity = activities.find(
      (act) => parseInt(act.id) === parseInt(e.target.value)
    );
    sendData(selectActivity);
  };
  return (
    <Conjunto>
      {postActive && <h2>Create a new tourist activity</h2>}
      {putActive && <h2>Modify tourist activity</h2>}
      {deleteActive && <h2>Delete tourist activity</h2>}
      <form onSubmit={handleSubmit}>
        <div>
          {(putActive || deleteActive) && (
            <select name="activities" onChange={(e) => handleSelectActivity(e)}>
              <option value="">Select an activity...</option>
              {activities &&
                activities.map((act, index) => (
                  <option key={index} value={act.id}>
                    {act.name}
                  </option>
                ))}
            </select>
          )}
        </div>
        {!deleteActive && (
          <div>
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

              {errors.name && <Error>{errors.name}</Error>}
            </DivTag>
            <DivTag>
              <label>Duration (hrs): </label>
              <input
                type="number"
                name="duration"
                min="1"
                max="20"
                value={form.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.duration && <Error>{errors.duration}</Error>}
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
              {errors.difficulty && <Error>{errors.difficulty}</Error>}
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
                <option value="Winter">Winter</option>
                <option value="Summer">Summer</option>
                <option value="Spring">Spring</option>
                <option value="Fall">Fall</option>
              </select>
              {errors.season && <Error>{errors.season}</Error>}
            </DivTag>

            <DivTag>
              <label>Countries: </label>
              <select
                name="countries"
                value={form.countries}
                onChange={handleChangeList}
              >
                <option value="">Select countries...</option>
                {countries &&
                  orderCountries.map((el, index) => (
                    <option key={el.id} value={el.name} size="10">
                      {el.name}
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
                      <CloseBotton onClick={() => handleDelete(e)}>
                        X
                      </CloseBotton>
                    </LiTag>
                  </UlTag>
                ))
              : []}
          </div>
        )}

        <div>
          {postActive && (
            <input
              type="submit"
              name="Create Activity"
              value="Create Activity"
            />
          )}
          {putActive && <input type="submit" name="Save" value="Save" />}
          {deleteActive && <input type="submit" name="Delete" value="Delete" />}
        </div>
      </form>
    </Conjunto>
  );
}

export default FormActivity;
