import React from "react";
import "./Footer.css";
import map from "../../assets/map.png";

function Blog() {
  return (
    <div>
      <div className="footer">
        <img src={map}></img>
        <section className="footer_info">
          <h2>Address</h2>
          <h2>We would love to hear from you.</h2>
          <p>We are always availbale to address the need of our user</p>
        </section>
        <div className="footer_num"> +917386197412</div>
      </div>
    </div>
  );
}
export default Blog;
