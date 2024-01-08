import React from "react";
import "./work.css";
import devpro from "../../assets/images/devpro.png";
import explore from "../../assets/images/explore.svg";

function work() {
  return (
    <div className="container">
      <a href='/sketches' target="_blank" className="box">
        <img className="devpro" src={devpro} alt="dev projects"></img>
        <div className="text">
          <div className="label">Domain</div>
          <p className="label2">Development Projects</p>
          <br />
          <div className="label">Tools</div>
          <p className="label2">
            Go, Springboot, ReactJS, NodeJS, ExpressJS, MongoDB, SQL, GraphQL,
            REST, WebRTC, Docker, Kubernetes, Jenkins
          </p>
          <br />
          <div className="label">Source</div>
          <a
            className="label3"
            href="https://github.com/methlox"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <a href="/sketches" target="_blank">
          <img className="explore" src={explore}></img>
        </a>
      </a>
      <a href='/sketches' target="_blank" className="box">
        <div className="text">
          <div className="label">Domain</div>
          <p className="label2">Development Projects</p>
          <br />
          <div className="label">Tools</div>
          <p className="label2">
            Go, Springboot, ReactJS, NodeJS, ExpressJS, MongoDB, SQL, GraphQL,
            REST, WebRTC, Docker, Kubernetes, Jenkins
          </p>
          <br />
          <div className="label">Source</div>
          <a
            className="label3"
            href="https://github.com/methlox"
            target="_blank"
          >
            GitHub
          </a>
        </div>
        <a href="/sketches" target="_blank">
          <img className="explore" src={explore}></img>
        </a>
      </a>
    </div>
  );
}

export default work;
