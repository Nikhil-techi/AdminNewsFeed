import React from "react";
import { Link } from "react-router-dom";

import "./Layout.css";

function PostsLayout(props) {
  let DnT = new Date(props.publish).toLocaleString();

  return (
    <div className="card">
      {/* <span>News Channel</span> */}
      <img src={props.image} alt="hey" />
      <h2>
        <span>{props.id}. </span>
        {props.title}
      </h2>

      <p>{props.body}</p>

      <h4>Author: {props.author}</h4>
      <h4>Published: {DnT}</h4>

      <Link to={{ pathname: props.url }} target="_blank">
        <button>Learn More...</button>
      </Link>
    </div>
  );
}

export default PostsLayout;
