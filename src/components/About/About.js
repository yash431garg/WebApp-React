import React from "react";
import "./About.css";
// import headIcon from "../../assets/headIcon.svg";
import aboutIcon from "../../assets/aboutIcon.svg";
// import aboutLeader from "../../assets/aboutLeader.svg";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";
import leftLeaves from "../../assets/leftLeaves.svg";

function About() {
  return (
    <div>
      <Header />
      <div className="about_main">
        {/* <img src={aboutIcon} className="about_main_icon"></img> */}

        <div className="about">
          <div className="about_data">
            <h2>BigBusiness App</h2>
            <img className="left_leave_home" src={leftLeaves}></img>

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

        <Slider />
      </div>
    </div>
  );
}
export default About;
