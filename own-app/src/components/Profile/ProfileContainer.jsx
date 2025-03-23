import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setUsersProfileAC } from "../redux/profile-reducer";

const ProfileContainer = ({ profile, setUsersProfileAC }) => {
  let { userId } = useParams();
  if (!userId) userId = "2"; // Дефолтный ID, если нет userId

  const fetchProfile = (id) => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then(response => {
        console.log("API Response:", response.data);
        setUsersProfileAC(response.data);
      })
      .catch(error => {
        console.error("Ошибка загрузки профиля:", error);

        // Если 400 то будет рандом юсер
        if (error.response && error.response.status === 400) {
          const randomUserId = Math.floor(Math.random() * 10) + 1;
          console.log("Выбран случайный userId:", randomUserId);
          fetchProfile(randomUserId); // Вызов еще раз
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
