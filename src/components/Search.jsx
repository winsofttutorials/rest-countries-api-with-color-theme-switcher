import React from "react";
import { Form, Filter } from "./";
const Search = () => {
  return (
    <section className="s-wrapper">
      <div className="paddings flexCol s-container">
        <Form />
        <Filter />
      </div>
    </section>
  );
};

export default Search;
