import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../IDK/Preloader/Preloader'

const ProfileInfo = ({ profile }) => {
  console.log("ProfileInfo props:", profile);
  if (!profile || !profile.photos) {
      console.error("Ошибка: profile пустой или нет photos", profile);
      return <Preloader />;
  }
  
  return (
    <div className={s.userInfo}>
      <div>
        <strong>{profile.fullName}</strong>

        <div className={s.imgUser}>
        <img src={profile.photos.large} alt="avatar" />
        </div>
       
      </div>
  
      <div>
        <p><strong>About me:</strong> {profile.aboutMe || "no info"}</p>
        <p><strong>Bought something:</strong> {profile.lookingForAJob ? "yes" : "did'nt"}</p>
      </div>
    </div>
  );
  

}


export default ProfileInfo;
