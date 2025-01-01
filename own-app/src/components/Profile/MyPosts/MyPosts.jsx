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
        <Post rating="Most popular" ratingStatus=" 4.6 stars" comment="i like this protein"/>
        <Post rating="Best value" ratingStatus=" 2.0 stars" comment="guys,thats not a protein("/>

      </div>
    </div>
  );
};

export default MyPosts;
