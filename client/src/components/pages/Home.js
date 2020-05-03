import React from "react";

const Home = () => (
  <div>
    <div className="jumbotron">
  <h1 className="display-4">Homepage</h1>
  <p className="lead">Just a newbie that started the path of coding.</p>
  <hr className="my-4" />
    <div className="card" style={{ width: '18rem' }}>
    <img src={require("../images/github.png")} alt="github" id="github"  height="200" width="200"/>
      <div className="card-body">
        <h5 className="card-title">Links for my portfolio:</h5>
        <p><a href={"https://github.com/chenalbe"} > GitHub Link </a> </p>
        <p><a href={"https://www.linkedin.com/in/albert-chen-2b214124/"} > Linkedin Link </a> </p>
      </div>
    </div>
  </div>
  </div>
);

export default Home;
