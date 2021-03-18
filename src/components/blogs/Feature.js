import React, { Component } from "react";
import Blog from "./blog";
import BlogsNew from "./BlogFormat";

function FeatureBlog() {
  return (
    <div>
      <Blog
        id={BlogsNew[1].id}
        img={BlogsNew[1].img}
        title={BlogsNew[1].title}
        content={BlogsNew[1].content}
      />
    </div>
  );
}

export default FeatureBlog;
