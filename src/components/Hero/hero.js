import React from "react";
import "./hero.scss";
import chevdown from "../../assets/images/chevdown.svg";
import About from "../About/about"

function hero() {
  return (
    <div>
      <img src={chevdown} className="icon"></img>
      <About />
    </div>
  );
}

export default hero;
