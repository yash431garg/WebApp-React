import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { couldStartTrivia, forEachChild } from "typescript";
import Blog from "./blog";
import BlogsNew from "./BlogFormat";

function Blogs() {
  return (
    <div>
      <Blog
        id={BlogsNew[0].id}
        title={BlogsNew[0].title}
        content={BlogsNew[0].content}
      />
      <Blog
        id={BlogsNew[1].id}
        title={BlogsNew[1].title}
        content={BlogsNew[1].content}
      />
    </div>
  );
}

export default Blogs;
