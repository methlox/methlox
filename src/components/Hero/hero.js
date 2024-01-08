import React from "react";
import "./hero.css";
import chevdown from "../../assets/images/chevdown.svg";
// import Sketch from "../../components/sketch/sketch";
import dev from "../../assets/images/dev.jpg";
import devgif from "../../assets/images/dev.gif";
import des from "../../assets/images/des.jpg";
import desgif from "../../assets/images/des.gif";
import dominic from "../../assets/sketches/dominic.png";
import brock from "../../assets/sketches/brock.png";

function hero() {
  return (
    <div>
      <img src={chevdown} className="icon"></img>
    </div>
  );
}

export default hero;
