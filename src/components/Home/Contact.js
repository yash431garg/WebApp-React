import React from "react";
import "./Contact.css";
import contactIcon from "../../assets/contactIcon.svg";
import leftLeaves from "../../assets/leftLeaves.svg";

function Contact() {
  return (
    <div>
      <img className="left_leave" src={leftLeaves}></img>
      <div className="contact">
        <div className="contact_data">
          <h2>Contact Us</h2>
          <div className="contact_icons">
            <a
              href={"https://www.instagram.com/big_businessapp"}
              target={"_blank"}
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              href={"https://www.linkedin.com/company/bigbusinessapp/"}
              target={"_blank"}
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              href={"https://www.quora.com/q/bigbusinessapp"}
              target={"_blank"}
            >
              <i class="fab fa-quora"></i>
            </a>
            <a
              href={"https://twitter.com/Big_businessapp?s=09"}
              target={"_blank"}
            >
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href={"mailto:cc.bigbusiness@gmail.com"} target={"_blank"}>
              <i class="far fa-envelope"></i>
            </a>
            <a
              href={
                "https://api.whatsapp.com/message/75NQHK4OOG5NM1?_fb_noscript="
              }
              target={"_blank"}
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <img src={contactIcon}></img>
      </div>
    </div>
  );
}
export default Contact;
