import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../UI/PostsLayout";

function GetPosts() {
  const [Posts, setPosts] = useState([]);

  const { title } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/article/${title}`)
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, [title]);

  return (
    <>
      <div>
        {Posts.map((data) => (
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
      </div>
    </>
  );
}

export default GetPosts;
