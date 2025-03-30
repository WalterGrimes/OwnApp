import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { setUsersProfileAC } from "../redux/profile-reducer";
import { profileAPI } from "../../API/API";

const ProfileContainer = ({ profile, setUsersProfileAC }) => {
  let { userId } = useParams();
  if (!userId) userId = "2";

  const fetchProfile = (id) => {
    profileAPI.getProfile(id)
      .then(response => {
        setUsersProfileAC(response.data);
      })
      .catch(error => {
        console.error("Ошибка загрузки профиля:", error);
        
        if (error.response && error.response.status === 400) {
          const randomUserId = Math.floor(Math.random() * 10) + 1;
          console.log("Выбран случайный userId:", randomUserId);
          fetchProfile(randomUserId);
        }
      });
  };

  useEffect(() => {
    fetchProfile(userId);
  }, [userId]);

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profileProduct.profile,
});

export default connect(mapStateToProps, { setUsersProfileAC })(ProfileContainer);