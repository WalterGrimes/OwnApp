import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAuth } from "../redux/auth-reducer";
import Header from "./Header";
import { Navigate } from "react-router-dom";

const HeaderContainer = ({ isAuth, getAuth }) => {
  useEffect(() => {
    getAuth().catch((error) => {
      console.log("Ошибка регистрации:", error);
    });
  }, [getAuth]);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Header />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
