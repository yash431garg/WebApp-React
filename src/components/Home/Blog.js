import React from "react";
import "./Blog.css";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blogImg1 from "../../assets/blogImg1.svg";
import blogImg2 from "../../assets/blogImg2.svg";
import blogImg3 from "../../assets/blogImg3.svg";
import leftLeave from "../../assets/leftLeave.svg";
import rightLeave from "../../assets/rightLeave.svg";
function Blog() {
  return (
    <div>
      <h1
        style={{ textAlign: "center", fontSize: "3em", fontWeight: "bolder" }}
      >
        {" "}
        <a href="/blogs" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          BLOGS
        </a>
      </h1>
      <img className="blog_left_leave" src={leftLeave}></img>

      <div className="blog_images">
        <img className="blog1_img" src={blog1}></img>
        <img className="blog1_img" src={blog2}></img>
        <img className="blog1_img" src={blog3}></img>
        {/* <img className="blog1_img" src={blogImg3}></img> */}
        <img className="blog_right_leave" src={rightLeave}></img>
      </div>
    </div>
  );
}
export default Blog;
