import React from "react";
import "./App.css";
import { Header, Search, Countries } from "./components";
// https://restcountries.com/v3.1/all
const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Countries />
    </>
  );
};

export default App;
