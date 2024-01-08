import React from "react";
import "./about.scss";

function about() {
  return (
    <div className="container">
      <div class="user-details">
        <h1> About </h1>
        <p>
          This is a personal page of Siddhant Sharma, backend developer and
          graphics designer based in India. Siddhant has been developing websites and making
          illustrations for many different projects since
          2021. Inspired by improving user experience, problem solving, story-telling and
          other cool stuff. ​​​ Work experience include: Swell, Viral Fission,
          Simmi Foundation and Superteam India
        </p>
      </div>
      <div class="user">
        <div class="tech">
          <h2>Design</h2>
          <i class="devicon-html5-plain colored"></i>
          <i class="devicon-bootstrap-plain-wordmark colored"></i>
          <i class="devicon-sass-original colored"></i>
          <p>
            HTML5, CSS, SCSS, TailwindCSS, ChakraUI, MaterialUI, Styled Components, React Icons
          </p>
        </div>
        <div class="tech">
          <h2>Code</h2>
          <i class="devicon-go-original-wordmark colored"></i>
          <i class="devicon-spring-plain-wordmark colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
          <p>
            Go, Springboot, ReactJS, NodeJS, ExpressJS, MongoDB, SQL, GraphQL, REST
          </p>
        </div>
        <div class="tech">
          <h2>Tools</h2>
          <i class="devicon-git-plain colored"></i>
          <i class="devicon-figma-plain colored"></i>
          <i class="devicon-illustrator-plain colored"></i>
          <p>
            Git, GitHub, VSCode, Figma, Adobe Illustrator, Adobe Photoshop,
            Adobe Premiere Pro, Davinci Resolve
          </p>
        </div>
      </div>
    </div>
  );
}

export default about;
