import React from "react";

const About = () => (
  <div>
  <div className="jumbotron">
  <h1 className="display-4">About</h1>
  <img src={require("../images/Profile.jpg")} alt="myself" id="propic"  height="200" width="200"/>
  <hr className="my-4"/>
  <p className="lead">Graduated from University of Washington with Regional Analysis Geography degree. I've worked as a GIS Visual Analyst for Google, and currently working as an auditor in Amazon. Specialized skillset in investigation, process improvement analysis, and performance audit.</p>
  <p className="lead">Borned in Taiwan, moved to Seattle during high school time. Love and embrace the Washington state culture and place. Enjoy snowboarding, cyclying, and hiking.
</p>

  </div>
  </div>
);

export default About;
