import React from "react";
import Header from "./Header";
import { getAuth } from "../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth().catch((error) => {
      console.log("Ошибка регистрации:", error);
    });
  }

  render() {
    const { isAuth } = this.props;

    // if (!isAuth) {
    //   return <Navigate to="/login" replace />;
    // }

    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  photo: state.auth.photo,
});

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
