import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=9479439b5f4c12b193dc94a96a1813bc3019779c-7855968-images-thumbs&n=13" alt="Protein product" />
      {props.rating}
      {props.ratingStatus}
      <div className={s.description}>
        <span>Protein 1</span>
      </div>
      <div>
        <span
          className={s.reviewsLink}
          onClick={() => alert(props.comment)}
        >
          Reviews
        </span>
      </div>
    </div>
  );
};

export default Post;
