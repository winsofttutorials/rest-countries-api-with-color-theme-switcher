import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Countries } from "./components";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";

// https://restcountries.com/v3.1/all
const FLAG_API =
  "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";

const App = () => {
  const [country, setCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filter, setFilter] = useState([]);

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
              onKeyDown={() => {}}
            />
          </form>
        </section>
        <section className="f-section d-header">
          <Dropdown
            placeholder="Filter by Region"
            className="my-className"
            options={["Africa", "America", "Asia", "Europe", "Oceania"]}
            value={"one"}
            onChange={(value) => console.log("change!", value)}
            onSelect={(value) => console.log("selected!", value)} // always fires
            onClose={(closedBySelection) =>
              console.log("closedBySelection?:", closedBySelection)
            }
            onOpen={(f) => f}
          />
        </section>
      </div>
      <div className="paddings container">
        {country?.length > 0 ? (
          country.map((c) => (
            <div className="card">
              <Countries c={c} />
            </div>
          ))
        ) : (
          <p>None</p>
        )}
      </div>
    </>
  );
};

export default App;
