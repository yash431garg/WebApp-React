import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { couldStartTrivia } from "typescript";
import blogs from "./BlogFormat";
import "./Blogs.css";
const Blogs = (props) => {
  return blogs.map((blog) => {
    console.log();

    return (
      <div className="blogs">
        <h2>{blog.title}</h2>
        <p className="p_less">
          {blog.content.length > 100
            ? blog.content.substring(0, 250) + "...."
            : blog.content}
        </p>
        <p className="p_more">{blog.content}</p>
        <p
          className="p_link"
          onClick={() => {
            document.getElementsByClassName("p_less")[0].style.display = "none";
            document.getElementsByClassName("p_more")[0].style.display =
              "block";
          }}
        >
          Read more
        </p>
      </div>
    );
  });
};

export default Blogs;
