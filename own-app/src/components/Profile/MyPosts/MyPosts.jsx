import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  // Данные постов
  let postData = [
    { rating: "Most popular", ratingStatus: "4.6 stars", comment: "I like this protein" },
    { rating: "Best value", ratingStatus: "2.0 stars", comment: "Guys, that's not a protein(" },
    { rating: "New release", ratingStatus: "5.0 stars", comment: "Amazing product!" },
    { rating: "Budget option", ratingStatus: "3.5 stars", comment: "Good for the price." },
  ];

  return (
    <div>
      <div>My items</div>
      <div>
        <button>Buy product</button>
      </div>
      <div className={s.posts}>
        {postData.map((post, index) => (
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
