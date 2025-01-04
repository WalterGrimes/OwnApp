import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <div>My items</div>
      <div>
        <button>Buy product</button>
      </div>
      <div className={s.posts}>
        {props.postData.map((post, index) => (
          <Post 
            key={index}
            rating={post.rating} 
            ratingStatus={post.ratingStatus} 
            comment={post.comment} 
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
