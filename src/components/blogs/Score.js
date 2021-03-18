import React, { Component } from "react";
import Blog from "./blog";
import BlogsNew from "./BlogFormat";

function Score() {
  return (
    <div>
      <Blog
        id={BlogsNew[2].id}
        img={BlogsNew[2].img}
        title={BlogsNew[2].title}
        content={BlogsNew[2].content}
      />
    </div>
  );
}

export default Score;
