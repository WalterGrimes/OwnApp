import React from "react";
import Header from "./Header";
import { setUsersData } from "../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI, getAuthUsersProfile } from "../../API/API";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth()
      .then(userData => {
        const { id, login, email } = userData;
        this.props.setUsersData(login, id, email);
        
        return authAPI.getAuthUsersProfile(id);
      })
      .then(profileData => {
        this.props.setUsersData(null, null, null, profileData.photos.small);
      })
      .catch(error => {
        console.error("Error:", error);
        // Можно добавить обработку ошибки (например, редирект на логин)
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  photo: state.auth.photo
});

export default connect(mapStateToProps, { setUsersData })(HeaderContainer);