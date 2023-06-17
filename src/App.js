import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Search, Countries } from "./components";

// https://restcountries.com/v3.1/all
const FLAG_API =
  "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital";

const App = () => {
  const [country, setCountry] = useState([]);

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
      <Search />
      <Countries country={country} />
    </>
  );
};

export default App;
