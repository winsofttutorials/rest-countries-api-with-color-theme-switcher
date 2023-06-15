import React from "react";

const Form = () => {
  return (
    <section className="frm-section">
      <form className="form flexColCenter" onSubmit={() => {}}>
        <i className="fas fa-search"></i>
        <input
          placeholder="Search for a country..."
          value={""}
          onChange={() => {}}
        />
      </form>
    </section>
  );
};

export default Form;
