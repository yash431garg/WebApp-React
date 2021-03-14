import React, { useContext } from "react";
import "./Home.css";
import headIcon from "../../assets/headIcon.svg";
import headMainIcon from "../../assets/headMainIcon.svg";
import headCircleIcon from "../../assets/headCircleIcon.svg";
import Feature from "./Feature";
import Blog from "./Blog";
import Contact from "./Contact";
import Sign from "./Sign";
import Footer from "./Footer";
import LoginMain from "../login/LoginMain";
import Toast from 'react-bootstrap/Toast';
import { AuthContext } from "../../containers/AuthContext";


function Home() {
  const { loginreducer } = useContext(AuthContext)
  const [state] = loginreducer;
  return (
    <div>
      <img src={headMainIcon} className="head_main_icon" alt='head_main_icon'></img>

      <div>
        <div className="head">
          <div className="head_data">
            <h2>
              Big business is building an ecosystem for trustworthy businesses.
            </h2>
            <p></p>

            <div className="login_option">
              {state.loginsuccess === false? (<LoginMain />):(<div></div>)}
              {state.loginsuccess === true ? (<Toast >
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">Authentication Status</strong>
                  {/* <small> 1 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>{state.UserPhoneNumber +  ' logged in successfully.'}</Toast.Body>
              </Toast>) : (<div></div>)}
            </div>
          </div>
          <img src={headIcon} alt='headIcon'></img>
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
