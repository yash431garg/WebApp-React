import React from "react";
import "./Profile.css";
import profileAvtar from "../../assets/profileAvtar.svg";
// import Avtar from "../../assets/avtar.webp";

function Profile(props) {
  return (
    <div className="profile">
      <img src={profileAvtar} className="profile_img"></img>
      <div className="user_info">
        <div className="profile_css">
          <div className="profile_css_name">
            <i className="fas fa-user"></i>
            <p>Name:</p>
          </div>
          <p>{props.name}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i class="fas fa-envelope"></i>
            <p>E-mail:</p>
          </div>
          <p>{props.emailId}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i className="fas fa-mobile"></i>
            <p>Mobile:</p>
          </div>
          <p>{props.mobileNumber}</p>
        </div>
      </div>

      <div className="business_info">
        <div className="profile_css">
          <div className="profile_css_name">
            <i className="fas fa-business-time"></i>
            <p>Organization Name:</p>
          </div>
          <p>{"Big Business App"}</p>
        </div>
        <div className="profile_css">
          <div className="profile_css_name">
            <i className="fas fa-user-friends"></i>
            <p>Organization Type:</p>
          </div>
          <p>{props.businessType}</p>
        </div>

        <button className="profile_button">Update</button>
      </div>
    </div>
  );
}
export default Profile;
