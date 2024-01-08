import React from "react";
import "./hero.scss";
import chevdown from "../../assets/images/chevdown.svg";

function hero() {
  return (
    <div>
      {/* <link rel="stylesheet" href="devicon.min.css"></link> */}
      <img src={chevdown} className="icon"></img>
      <div className="container">
        <div class="user-details">
          <h1> My Expertise </h1>
          <p>hi</p>
        </div>
        <div class="user">
          <div class="tech">
            <h2>Design</h2>
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
            <i class="devicon-sass-original colored"></i>
            <p>
              Mumblecore hexagon kombucha, pitchfork four loko raclette
              intelligentsia master cleanse. Vinyl XOXO lumbersexual
            </p>
          </div>
          <div class="tech">
            <h2>Code</h2>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark"></i>
            <p>
              Mumblecore hexagon kombucha, pitchfork four loko raclette
              intelligentsia master cleanse. Vinyl XOXO lumbersexual
            </p>
          </div>
          <div class="tech">
            <h2>Tools</h2>
            <i class="devicon-git-plain"></i>
            <i class="devicon-gulp-plain colored"></i>
            <i class="devicon-atom-original-wordmark"></i>
            <p>
              Mumblecore hexagon kombucha, pitchfork four loko raclette
              intelligentsia master cleanse. Vinyl XOXO lumbersexual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
