import React from "react";
import Header from "./Header";
import axios from "axios";
import { setUsersData } from "../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { login, id, email } = response.data.data;
          this.props.setUsersData(login, id, email);

          axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then((profileResponse) => {
              let photo = profileResponse.data.photos.small;
              this.props.setUsersData(login, id, email, photo);
            })
        }
      })
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
