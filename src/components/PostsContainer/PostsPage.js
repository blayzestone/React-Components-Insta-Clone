//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import postsData from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data
  const [posts] = useState(postsData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {posts.map((postData, index) => <Post key={index} post={postData}/>)}
    </div>
  );
};

export default PostsPage;
