import React from "react";
import "./About.css";
// import headIcon from "../../assets/headIcon.svg";
import aboutIcon from "../../assets/aboutIcon.svg";
import aboutLeader from "../../assets/aboutLeader.svg";

function Home() {
  return (
    <div>
      <img src={aboutIcon} className="about_main_icon"></img>

      <div className="about">
        <div className="about_data">
          <h2>Welcome to BigBusiness</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Cssical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
      <div className="about">
        <div className="about_data">
          <h2>Our Mission</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Cssical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
      <img className="about_leader" src={aboutLeader}></img>
    </div>
  );
}
export default Home;
