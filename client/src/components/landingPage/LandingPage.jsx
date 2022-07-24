import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div>
      <h1>Countries</h1>

      <NavLink to="/home">
        <button className={style.btn}>Start</button>
      </NavLink>
    </div>
  );
}

export default LandingPage;
