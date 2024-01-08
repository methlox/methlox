import React from "react";
import "./section.css";
import devpro from "../../assets/images/devpro.png";

function sections() {
  return (
    <div className="container">
      <a href="/development" target="_blank" className="box">
        <img className="devpro" src={devpro} alt="dev projects"></img>
      </a>\
      <a href="/sketches" target="_blank" className="box">
        <img className="devpro" src={devpro} alt="dev projects"></img>
      </a>
    </div>
  );
}

export default sections;
