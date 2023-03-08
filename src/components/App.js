import React from "react";
import "../styles.css";
import DisplayAllPosts from "./DisplayAllPosts";
import Navbar from "./Navbar";
//import Post from "./Post";

const App = () => {
  return (
    <>
      <Navbar />
      <DisplayAllPosts />
    </>
  );
};

export default App;
