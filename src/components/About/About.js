import React from "react";
import "./About.css";
// import headIcon from "../../assets/headIcon.svg";
import aboutIcon from "../../assets/aboutIcon.svg";
import aboutLeader from "../../assets/aboutLeader.svg";
import Slider from "../Slider/Slider";

function About() {
  return (
    <div className="about_main">
      <img src={aboutIcon} className="about_main_icon"></img>

      <div className="about">
        <div className="about_data">
          <h2>BigBusiness App</h2>

          <p>
            With Big Business App, one can seamlessly manage their businesses in
            one single place through the web and mobile application or simply
            integrate our app into their existing systems. Every time you use
            our application we give you an added benefit called a B score. It
            depicts the health and trustworthiness of a business. Our aim is to
            build an efficient ecosystem for trustworthy business
          </p>
        </div>
      </div>

      <Slider />
    </div>
  );
}
export default About;
