import React from "react";
import "./Sign.css";
import signIcon from "../../assets/signIcon.svg";

function Sign() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sing Up</h1>
      <div className="sign">
        <img src={signIcon}></img>
        <div className="sign_data">
          <h2>Enter your mobile number</h2>
          <p>
            You will recieve a 6-digit verfication code for phone verfication.
          </p>
          <hr
            style={{
              border: "1px solid #384259",
              width: "30vw",
              marginTop: "100px",
            }}
            noshade=""
          />
          <button className="sign_button">Continue</button>
        </div>
      </div>
    </div>
  );
}
export default Sign;
