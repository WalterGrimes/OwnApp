import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
   

  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer // postData={props.postData} 
      //dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
 