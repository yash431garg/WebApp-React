import React from "react";
import "./Contact.css";
import contactIcon from "../../assets/contactIcon.svg";
import leftLeaves from "../../assets/leftLeaves.svg";

function Contact() {
  return (
    <div>
      <img className="left_leave" src={leftLeaves} alt='left_leave'></img>
      <div className="contact">
        <div className="contact_data">
          <h2>Contact Us</h2>
          <div className="contact_icons">
            <a href={""} target={"_blank"}>
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href={"https://www.linkedin.com/company/bigbusinessapp/"}
              target={"_blank"}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              href={"https://www.quora.com/q/bigbusinessapp"}
              target={"_blank"}
            >
              <i className="fab fa-quora"></i>
            </a>
            <a
              href={"https://twitter.com/Big_businessapp?s=09"}
              target={"_blank"}
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href={""} target={"_blank"}>
              <i className="far fa-envelope"></i>
            </a>
            <a href={""} target={"_blank"}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <img src={contactIcon} alt='contactIcon'></img>
      </div>
    </div>
  );
}
export default Contact;
