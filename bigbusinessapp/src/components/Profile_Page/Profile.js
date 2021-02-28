import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <div className="Profile_Main">
      <h1>{"Big Business App"}</h1>

      <img
        ur
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOdl2MNfJYiv3gDOHjd-Vn5wIFNQErfLEIw&usqp=CAU"
        }
        className="Profile_Img"
      />
      <p>{`Name: ${props.name}`}</p>
      <p>{`EmailId: ${props.emailId}`}</p>
      <p>{`Number: ${props.mobileNumber}`}</p>
      <p className="Profile_Type">{`BusinessType: ${props.businessType}`}</p>
    </div>
  );
}
export default Profile;
