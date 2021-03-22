import React from "react";

import "./Blog_img.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import leftLeave from "../../assets/leftLeave.svg";
import rightLeave from "../../assets/rightLeave.svg";
function Blog() {
  return (
    <div>
      <h1
        style={{ textAlign: "center", fontSize: "3em", fontWeight: "bolder" }}
      >
        BLOGS
      </h1>
      <img className="blog_left_leave" src={leftLeave}></img>

      <div className="blog_images">
        <a href="/AboutBigBusiness">
          <img className="blog_img" src={blog1}></img>
        </a>
        <a href="/FeaturesBigBusiness">
          <img className="blog_img" src={blog2}></img>
        </a>
        <a href="/BusinessScore">
          <img className="blog_img" src={blog3}></img>
        </a>
        <img className="blog_right_leave" src={rightLeave}></img>
      </div>
    </div>
  );
}
export default Blog;
