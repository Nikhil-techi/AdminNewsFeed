import React, { useRef, useState } from "react";

import Form from "../UI/FormLayout";
import "../UI/FormLayout.css";

import IDInput from "../UI/IDInput";

import Layout from "../UI/PostsLayout";
import refInput from "../FormInput";

function UpdatePost() {
  const ID = useRef("");

  const { Title, Body, Now, Author, ImageURL, ArticleURL } =
    refInput().props.children;

  const [Updated, setUpdated] = useState([]);

  const UpdatingData = (obj) => {
    fetch(`http://localhost:9000/article/${ID.current.value}`, {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setUpdated(result));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const UpdateData = {
      author: Author.current.value,
      title: Title.current.value,
      description: Body.current.value,
      url: ArticleURL.current.value,
      imageurl: ImageURL.current.value,
      published: Now.current.value,
    };

    UpdatingData(UpdateData);

    ID.current.value = "";
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
        datetime={Now}
        author={Author}
        imageurl={ImageURL}
        url={ArticleURL}
        btn_name="UpdatePost"
        idinput={<IDInput id={ID} />}
      />
      {Updated.map((data) => (
        <Layout
          key={data.source.id}
          id={data.source.id}
          image={data.imageurl}
          title={data.title}
          body={data.description}
          author={data.author}
          publish={data.published}
        />
      ))}
    </>
  );
}

export default UpdatePost;
