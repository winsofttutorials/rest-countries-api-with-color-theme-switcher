import React from "react";
import "./Countries.css";
const Countries = ({ c }) => {
  return (
    <div className="countries">
      <div className="paddings count-container">
        <div className="card">
          <div className="card-container">
            <img src={c.flags.svg} alt={c.name.common} />
          </div>
          <div className="cardInfo">
            <h1>{c.name.common}</h1>
            <h2>Population: {c.population}</h2>
            <h2>Region: {c.region}</h2>
            <h2>Capital: {c.capital}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
