import React, { useContext } from "react";
import "../Header1/Header1.css";
import firebase from "../../containers/Firebase";
import { AuthContext } from "../../containers/AuthContext";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";


function Header() {
  const { loginreducer } = useContext(AuthContext);
  const [state] = loginreducer;
  return (
    <header>
      <ul className="ul_main1">
        <li className="li">
          <Link to="/">
            <img className="li_img" src={logo} alt="li_img"></img>
          </Link>
        </li>

<li className="li_end">
          <Link to="/page">
            <i class="fas fa-user-circle"></i>
          </Link>
        </li>
        <li className="li_end">
          <a
            href="/#contact_id"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Contact Us</p>
          </a>
        </li>
        <li className="li_end">
          <a
            href="/#blog_id"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p>Blogs</p>
          </a>
          <i class="fas fa-blog"></i>
        </li>
        
          
          
        

      </ul>
    </header>
  );
}

export default Header;
