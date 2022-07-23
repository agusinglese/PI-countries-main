import { Link } from "react-router-dom";

function CountryCard({ data }) {
  const { id, flag, continent, name } = data;
  return (
    <div>
      <Link to={`/country/${id}`}>
        <div>
          <img src={flag} alt="flag" />
        </div>
        <div>
          <h3>{name}</h3>
        </div>
      </Link>
      <div>
        <p>{continent}</p>
      </div>
    </div>
  );
}

export default CountryCard;
