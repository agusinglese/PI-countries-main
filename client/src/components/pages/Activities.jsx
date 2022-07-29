import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../actions";
import { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard";
import FormActivity from "../FormActivity";
import { useForm } from "../../hooks/useForm";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";

const initialForm = {
  name: "",
  duration: "",
  difficulty: "",
  season: "",
  countries: [],
};

const DivCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Buttons = styled.button`
  margin-bottom: 3vh;
`;

const Conteiner = styled.div`
  background-size: cover;
`;

function Activities() {
  const { pathname } = useLocation();
  const activities = useSelector((state) => state.activities);
  const [postActive, setPostActive] = useState(false);
  const [putActive, setPutActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);
  const dispatch = useDispatch();
  const {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDelete,
    handleChangeList,
    sendData,
  } = useForm(initialForm, postActive, putActive, deleteActive);

  useEffect(() => {
    dispatch(getActivities());
  }, [activities, dispatch]);

  const handleAction = (e) => {
    if (e.target.value === "POST") {
      setPostActive(true);
    } else if (e.target.value === "PUT") {
      setPutActive(true);
    } else if (e.target.value === "DELETE") {
      setDeleteActive(true);
    }
  };

  const handleClose = () => {
    setPostActive(false);
    setPutActive(false);
    setDeleteActive(false);
  };

  return (
    <>
      <Conteiner>
        <Header pathname={pathname} />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          {activities.length ? (
            <h1>Tourist Activities</h1>
          ) : (
            <h3>Activities not found</h3>
          )}
        </div>
        <div>
          {!putActive && !postActive && !deleteActive && (
            <Buttons value="POST" onClick={(e) => handleAction(e)}>
              New Activity
            </Buttons>
          )}
          {activities.length && !postActive && !putActive && !deleteActive ? (
            <Buttons value="PUT" onClick={(e) => handleAction(e)}>
              Modify Activity
            </Buttons>
          ) : (
            false
          )}
          {activities.length && !postActive && !putActive && !deleteActive ? (
            <Buttons value="DELETE" onClick={(e) => handleAction(e)}>
              Delete Activity
            </Buttons>
          ) : (
            false
          )}
        </div>

        {(postActive || putActive || deleteActive) && (
          <FormActivity
            handleBlur={handleBlur}
            handleChange={handleChange}
            form={form}
            errors={errors}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            handleChangeList={handleChangeList}
            postActive={postActive}
            putActive={putActive}
            deleteActive={deleteActive}
            sendData={sendData}
          />
        )}
        <Link to="/home">
          <button>Back to home</button>
        </Link>

        {(postActive || putActive || deleteActive) && (
          <button onClick={(e) => handleClose(e)}>Close</button>
        )}
        <DivCards>
          {activities &&
            activities.map((act) => <ActivityCard dataActivity={act} />)}
        </DivCards>
      </Conteiner>
      <Footer />
    </>
  );
}

export default Activities;
