import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getUsersProfile } from "../redux/profile-reducer";
import { authRedirect } from "../../hoc/authRedirect";
import { compose} from 'redux';

const ProfileContainer = ({ profile, getUsersProfile }) => {
  let { userId } = useParams();
  if (!userId) userId = "2";

  const fetchProfile = (id, attempts = 0) => {
    if (attempts > 5) {
      console.error("Слишком много неудачных попыток загрузки профиля.");
      return;
    }

    getUsersProfile(id)
      .catch((error) => {
        console.error("Ошибка загрузки профиля:", error);
        if (error.response && error.response.status === 400) {
          const randomUserId = Math.floor(Math.random() * 10) + 1;
          console.log("Выбран случайный userId:", randomUserId);
          fetchProfile(randomUserId, attempts + 1);
        }
      });
  };

  useEffect(() => {
    fetchProfile(userId);
  }, [userId]);

  if (!profile || Object.keys(profile).length === 0) {
    return <div>Загрузка профиля...</div>;
  }

  return <Profile profile={profile} />;
};

const mapStateToProps = (state) => ({
  profile: state.profileProduct.profile,
});


export default compose(
  connect(mapStateToProps, { getUsersProfile }),
   authRedirect
)(ProfileContainer)


