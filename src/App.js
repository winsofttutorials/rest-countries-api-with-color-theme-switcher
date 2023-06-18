import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Countries } from "./components";
// import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

// https://restcountries.com/v3.1/all
const FLAG_API = "https://restcountries.com/v3.1/all?";

const App = () => {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filter, setFilter] = useState(country);

  const listCountries = async (title) => {
    const response = await fetch(`${FLAG_API}&s=${title}`);
    const data = await response.json();
    setCountry(data);
  };

  useEffect(() => {
    listCountries("Nigeria");
  }, []);

  return (
    <>
      <Header />
      <div className="paddings flexCol">
        <section className="frm-section">
          <form className="form flexColCenter" onSubmit={() => {}}>
            <i
              className="fas fa-search"
              onClick={() => listCountries(searchTerm)}
            ></i>
            <input
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={() => listCountries(searchTerm)}
            />
          </form>
        </section>
        <section className="f-section d-header"></section>
      </div>

      {country?.length > 0 ? (
        <div className="paddings card1">
          {country.map((c, i) => (
            <Countries c={c} key={i} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>None</p>
        </div>
      )}
    </>
  );
};

export default App;
