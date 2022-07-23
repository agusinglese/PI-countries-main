import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Countries</h1>

      <NavLink to="/home">
        <button>Start</button>
      </NavLink>
    </div>
  );
}

export default LandingPage;
