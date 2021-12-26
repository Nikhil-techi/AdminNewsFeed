import React, { useState } from "react";

import Form from "../UI/FormLayout";
import "../UI/FormLayout.css";

import Layout from "../UI/PostsLayout";
import refInput from "../FormInput";

function CreatePost() {
  const [Created, setCreated] = useState([]);
  const { Title, Body, Now, Author, ImageURL, ArticleURL } =
    refInput().props.children;

  function PostingData(obj) {
    fetch("http://localhost:9000/article", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setCreated(result));
  }

  const SubmitHandler = (event) => {
    event.preventDefault();

    const Article = {
      author: Author.current.value,
      title: Title.current.value,
      description: Body.current.value,
      url: ArticleURL.current.value,
      imageurl: ImageURL.current.value,
      published: Now.current.value,
    };

    PostingData(Article);

    Author.current.value = "";
    Title.current.value = "";
    Body.current.value = "";
    ImageURL.current.value = "";
    Now.current.value = "";
    ArticleURL.current.value = "";
  };

  return (
    <>
      <Form
        onSubmit={SubmitHandler}
        title={Title}
        body={Body}
        author={Author}
        datetime={Now}
        imageurl={ImageURL}
        url={ArticleURL}
        btn_name="CreatePost"
      />
      {Created.map((data) => (
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

export default CreatePost;
