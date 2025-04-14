import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"; // используем Navigate вместо Redirect

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const authRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" replace />; // use Navigate

      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
};
