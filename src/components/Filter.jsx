import React from "react";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import "./Filter.css";

const Filter = () => {
  return (
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
  );
};

export default Filter;
