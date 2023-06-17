import React from "react";
import { DarkMode } from "./";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section className="h-wrapper">
        <div className="paddings flexCol borderBottom h-container">
          <h2>Where in the world?</h2>
          <DarkMode />
        </div>
      </section>
    </>
  );
};

export default Header;
