import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My items</div>
      <div>
        <button>Buy product</button>
      </div>
      <div className={s.posts}>
        <Post rating = 'Most popular' />
        <Post rating = 'Best value'/>
      
      </div>
    </div>
  );
};

export default MyPosts;
