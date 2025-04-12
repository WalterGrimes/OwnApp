import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getUsersProfile } from "../redux/profile-reducer";

const ProfileContainer = ({ profile, getUsersProfile, isAuth }) => {
  let { userId } = useParams();
  if (!userId) userId = "2";

  const fetchProfile = (id) => {
    getUsersProfile(id)
      .catch((error) => {
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

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profileProduct.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUsersProfile })(ProfileContainer);
