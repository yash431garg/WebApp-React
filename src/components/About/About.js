import React from "react";
import "./About.css";
import aboutIcon from "../../assets/aboutIcon.svg";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";
import leftLeaves from "../../assets/leftLeaves.svg";
// import headIcon from "../../assets/headIcon.svg";
// import aboutLeader from "../../assets/aboutLeader.svg";

function About() {
  return (
    <div>
      <Header />
      <img className="left_leave_icon" src={leftLeaves}></img>
      <div className="about_main">
        <div className="about">
          <div className="about_data">
            <h2>BigBusiness App</h2>
            <p>
              With Big Business App, one can seamlessly manage their businesses
              in one single place through the web and mobile application or
              simply integrate our app into their existing systems. Every time
              you use our application we give you an added benefit called a B
              score. It depicts the health and trustworthiness of a business.
              Our aim is to build an efficient ecosystem for trustworthy
              business
            </p>
          </div>
        </div>

        <Slider className="slider" />
      </div>
    </div>
  );
}
export default About;
