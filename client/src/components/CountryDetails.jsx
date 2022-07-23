import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { searchById } from "../actions";

function CountryDetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.countryDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(searchById(id));
  }, [dispatch]);

  return (
    <div className="card">
      <div className="image-container">
        <img src={data.flag} alt="flag" />
        <div />
      </div>
      <div>
        <span className="title">{data.name ? data.name : `Not found`}</span>
        <div className="info">
          <div className="info">
            Capital : <span>{data.capital ? data.capital : `Not found`}</span>
          </div>
          <div>
            Population :{" "}
            <span>{data.population ? data.population : `Not found`}</span>
          </div>
          <div>
            Area :{" "}
            <span>
              {data.area ? `${data.area / 1000000} million km2` : `Not found`}
            </span>
          </div>
          <div className="info">
            Continent :{" "}
            <span>{data.continent ? data.continent : `Not found`}</span>
          </div>
          <div className="info">
            Subregion :{" "}
            <span>{data.subregion ? data.subregion : `Not found`}</span>
          </div>
          <div className="info">
            Tourist Activities : <span>ver q onda</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
