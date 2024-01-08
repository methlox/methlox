import React from "react";
import "./hero.scss";
import chevdown from "../../assets/images/chevdown.svg";
import About from "../About/about"
import Work from "../Work/work"
import Sections from "../Sections/sections"

function hero() {
  return (
    <div>
      <img src={chevdown} className="icon"></img>
      {/* <Work /> */}
      <Sections />
      <About />
    </div>
  );
}

export default hero;
