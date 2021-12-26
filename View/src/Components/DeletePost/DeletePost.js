import React, { useRef, useState } from "react";

import IDInput from "../UI/IDInput";
import "../UI/FormLayout.css";

import Layout from "../UI/PostsLayout";

function DeletePost() {
  let PostID = useRef("");
  const [Crab, setCrab] = useState([]);

  const DeletingPost = () => {
    fetch(`http://localhost:9000/article/${PostID.current.value}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => setCrab(result));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    DeletingPost();
    PostID.current.value = "";
  };

  return (
    <>
      <form style={{ padding: "20px" }} onSubmit={SubmitHandler}>
        <IDInput id={PostID} />
        <div className="row">
          <button type="submit">DeletePost</button>
        </div>
      </form>
      {Crab.map((data) => (
        <Layout
          key={data.source.id}
          id={data.source.id}
          image={data.imageurl}
          title={data.title}
          body={data.description}
          author={data.author}
          publish={data.published}
          url={data.url}
        />
      ))}
    </>
  );
}

export default DeletePost;
