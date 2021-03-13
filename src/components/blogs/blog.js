import React from "react";
import "./Blogs.css";

function Blog(props) {
  return (
    <div className="blogs">
      <h2>{props.title}</h2>
      <p className="p_less">
        {props.content.length > 100
          ? props.content.substring(0, 250) + "...."
          : props.content}
      </p>
      <p className="p_more">{props.content}</p>

      <p
        className="p_link"
        onClick={() => {
          document.getElementsByClassName("p_less")[props.id].style.display =
            "none";
          document.getElementsByClassName("p_link")[props.id].style.display =
            "none";
          document.getElementsByClassName("p_more")[props.id].style.display =
            "block";
        }}
      >
        Read more
      </p>
    </div>
  );
}
export default Blog;
