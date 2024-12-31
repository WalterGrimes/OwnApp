import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://avatars.mds.yandex.net/get-mpic/4304254/img_id8368786378751231346.jpeg/orig"
        alt="content image"
      />
      <div>
        Description of Product
      </div>
      <MyPosts />
    </div> 
  );
};

export default Profile;
