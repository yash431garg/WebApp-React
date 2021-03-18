import React, { useContext } from "react";
import "./Home.css";
import aboutIcon from "../../assets/aboutIcon.svg";
// import headMainIcon from "../../assets/headMainIcon.svg";
import sheadIcon from "../../assets/headIcon.svg";
import Feature from "./Feature";
import BlogImg from "./Blog_img";
import Contact from "./Contact";
import Sign from "./Sign";
import Footer from "./Footer";
import LoginMain from "../login/LoginMain";
import Toast from "react-bootstrap/Toast";
import { AuthContext } from "../../containers/AuthContext";

function Home() {
  const { loginreducer } = useContext(AuthContext);
  const [state] = loginreducer;
  return (
    <div className="home_main">
      <img
        src={aboutIcon}
        className="head_main_icon"
        alt="head_main_icon"
      ></img>

      <div>
        <div className="head">
          <div className="head_data">
            <h2>
              Big business is building an ecosystem for trustworthy businesses.
            </h2>
            <p></p>

            <div className="login_option">
              {state.loginsuccess === false ? <LoginMain /> : <div></div>}
              {state.loginsuccess === true ? (
                <div>
                  <div>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded mr-2"
                      alt=""
                    />
                    <strong className="mr-auto">Authentication Status</strong>
                    {/* <small> 1 mins ago</small> */}
                  </div>
                  <Toast.Body>
                    {state.UserPhoneNumber + " logged in successfully."}
                  </Toast.Body>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Slider /> */}
      <Feature />
      <div id="blog_id">
        <BlogImg />
      </div>
      <Contact />
      {/* <Sign /> */}
      <Footer />
    </div>
  );
}
export default Home;
