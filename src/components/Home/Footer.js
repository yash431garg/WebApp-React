import React from "react";
import "./Footer.css";
import map from "../../assets/map.svg";
import footer from "../../assets/footer.svg";

function Blog() {
  return (
    <div>
      <div className="footer">
        <img src={map}></img>
        <div className="footer_info">
          <h2>Address</h2>
          <h2>We would love to hear from you.</h2>
          <p>We are always availbale to address the need of our user</p>
          <p>+917893455678</p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
