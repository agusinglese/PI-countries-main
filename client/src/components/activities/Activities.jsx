import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../actions";
import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import FormActivity from "./FormActivity";
import { useForm } from "../../hooks/useForm";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";
import styled from "styled-components";
import Footer from "../Footer";
import ErrorMessage from "../ErrorMessage";
import ConfirmMessage from "./ConfirmMessage";
import Loader from "../Loader";

const initialForm = {
  name: "",
  duration: "",
  difficulty: "",
  season: "",
  countries: [],
};

//ESTILOS
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
  position: relative;
`;

const SubConteiner = styled.div`
  background-color: #94d2bd; //#38a3a5;;
  box-shadow: 2px 4px 1px #2ba1a3;
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;
  padding-top: 15vh;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

function Activities() {
  const { pathname } = useLocation();
  const { activities, msgError, msgConfirm } = useSelector((state) => state);
  const [postActive, setPostActive] = useState(false);
  const [putActive, setPutActive] = useState(false);
  const [deleteActive, setDeleteActive] = useState(false);
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  }, [dispatch]);

  //Accion a ejecutar
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
        {msgConfirm.hasOwnProperty("name") && (
          <ConfirmMessage
            putActive={putActive}
            deleteActive={deleteActive}
            postActive={postActive}
          />
        )}

        {msgError.hasOwnProperty("err") && <ErrorMessage />}
        <Header pathname={pathname} />

        <SubConteiner>
          {activities.length ? (
            <h1>TOURIST ACTIVITIES</h1>
          ) : (
            <h1>Activities not found</h1>
          )}
        </SubConteiner>
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
        {activities.length === 0 ? <Loader /> : false}
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
            activities.map((act) => (
              <ActivityCard key={act.id} dataActivity={act} />
            ))}
        </DivCards>
      </Conteiner>
      <Footer />
    </>
  );
}

export default Activities;
