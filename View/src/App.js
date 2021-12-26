import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";

import GetPosts from "./Components/GetPosts/GetPosts";
import GetPost from "./Components/GetPost/GetPost";
import NewPost from "./Components/CreatePost/CreatePost";
import UpdatePost from "./Components/UpdatePost/UpdatePost";
import DeletePost from "./Components/DeletePost/DeletePost";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<GetPosts />} />
        <Route path="createpost" element={<NewPost />} />
        <Route path="/getpost/:title" element={<GetPost />} />
        <Route path="updatepost" element={<UpdatePost />} />
        <Route path="deletepost" element={<DeletePost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
