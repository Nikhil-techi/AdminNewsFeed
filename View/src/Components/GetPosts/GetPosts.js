import React, { useEffect, useState } from "react";
import Layout from "../UI/PostsLayout";

function GetPosts() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/article")
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);

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
            url={data.url}
          />
        ))}
      </div>
    </>
  );
}

export default GetPosts;
