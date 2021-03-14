import React from "react";
import "./Home.css";
import headIcon from "../../assets/headIcon.svg";
import headMainIcon from "../../assets/headMainIcon.svg";
import headCircleIcon from "../../assets/headCircleIcon.svg";
import Feature from "./Feature";
import Blog from "./Blog";
import Contact from "./Contact";
import Sign from "./Sign";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <img src={headMainIcon} className="head_main_icon"></img>

      <div>
        <div className="head">
          <div className="head_data">
            <h2>
              Big business is building an ecosystem for trustworthy businesses.
            </h2>
            <p></p>

            <div className="login_option">
              <input
                className="input"
                type="text"
                placeholder="Enter Mobile Number"
              ></input>
              <button className="button">Sign Up</button>
            </div>
          </div>
          <img src={headIcon}></img>
        </div>
      </div>
      <Feature />
      <Blog />
      <Contact />
      <Sign />
      <Footer />
    </div>
  );
}
export default Home;
