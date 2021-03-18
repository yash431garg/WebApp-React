import React, { Component } from "react";
import Blog from "./blog";
import BlogsNew from "./BlogFormat";

function BigAbout() {
  return (
    <div>
      <Blog
        id={BlogsNew[0].id}
        img={BlogsNew[0].img}
        title={BlogsNew[0].title}
        content={BlogsNew[0].content}
      />
    </div>
  );
}

export default BigAbout;
