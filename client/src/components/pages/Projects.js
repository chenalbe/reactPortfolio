import React from "react";

const Projects = () => (
  <div>
    <div class="container">
      <div class="row">
        <div className="col">
            <div className="list-group">
              <a href={"https://sarahm16.github.io/FindMyDoctor/"} className="list-group-item list-group-item-primary ">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Find My Doctor</h5>
              </div>
              <p className="mb-1"><img src={require("../images/home.png")} alt="FindMyDoctor" height="200" width="200" /></p>
              <small>App that searches desired health service.</small>
              </a>
            </div>
        </div>
        <div className="col">
            <div className="list-group">
              <a href={"https://chenalbe.github.io/WorkDayPlanner/"} className="list-group-item list-group-item-success">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Work Day Panner</h5>
              </div>
              <p className="mb-1"><img src={require("../images/DayPlanner.png")} alt="Day Planner" height="200" width="200" /></p>
              <small>App that allows you to setup events for the day during work hours.</small>
              </a>
            </div>
        </div>  
      </div>
      <div class="row">
        <div className="col">
            <div className="list-group">
              <a href={"https://chenalbe.github.io/theWeatherChannel/"} className="list-group-item list-group-item-primary ">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Weather Dashboard</h5>
              </div>
              <p className="mb-1"><img src={require("../images/weatherChannel.png")} alt="WeatherDashboard" height="200" width="200" /></p>
              <small>App that allows you to search for weater at desired locations.</small>
              </a>
            </div>
        </div>
        <div className="col">
            <div className="list-group">
              <a href={"https://github.com/rnyang-16/Project_2"} className="list-group-item list-group-item-success">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Bootlet Booking</h5>
              </div>
              <p className="mb-1"><img src={require("../images/project2.jpg")} alt="project2" height="200" width="200" /></p>
              <small>App that allows you to search for recipes based on ingredients.</small>
              </a>
            </div>
        </div>  
      </div>
      <div class="row">
        <div className="col">
            <div className="list-group">
              <a href={"https://glacial-reaches-93102.herokuapp.com/"} className="list-group-item list-group-item-primary ">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Eat da Burger</h5>
              </div>
              <p className="mb-1"><img src={require("../images/burger.jpg")} alt="WeatherDashboard" height="200" width="200" /></p>
              <small>App that utlizes MongoDB functions.</small>
              </a>
            </div>
        </div>
        <div className="col">
            <div className="list-group">
              <a href={"https://intense-inlet-38904.herokuapp.com/"} className="list-group-item list-group-item-success">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Note Taker</h5>
              </div>
              <p className="mb-1"><img src={require("../images/NoteTaker.jpg")} alt="project2" height="200" width="200" /></p>
              <small>App that allows you to take and save notes.</small>
              </a>
            </div>
        </div>  
      </div>
    </div>
  </div>
);

export default Projects;
