import React from "react";
import { connect } from "react-redux";
import {
  showUsersItemSuccess,
  hideUsersItemSuccess,
  toggleIsShowing,
  getUsersThunkCreator,
  setThatFetching
} from '../redux/users-reducer';
import Users from "./Users";
import Preloader from "../IDK/Preloader/Preloader";
import { Navigate } from "react-router-dom";

class UsersContainer extends React.Component {  
  componentDidMount() {
    const { currentPage, pageSize, getUsersThunkCreator } = this.props;
    getUsersThunkCreator(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  }

  render() {
    const { 
      users, 
      currentPage, 
      allUsersCount, 
      pageSize, 
      isFetching, 
      showingInProgress,
      show,
      hide,
    //   isAuth, // 👈 Добавлено
    } = this.props;

    // if (!isAuth) {
    //   return <Navigate to="/login" replace />;
    // }

    return (
      <>
        {isFetching && <Preloader />}
        <Users 
          users={users}
          currentPage={currentPage}
          allUsersCount={allUsersCount}
          pageSize={pageSize}
          onPageChanged={this.onPageChanged}
          show={show}
          hide={hide}
          showingInProgress={showingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  allUsersCount: state.usersPage.allUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  showingInProgress: state.usersPage.showingInProgress,
  isAuth: state.auth.isAuth, // 👈 Добавлено
});

export default connect(mapStateToProps, { 
  show: showUsersItemSuccess,
  hide: hideUsersItemSuccess,
  setThatFetching,
  toggleIsShowing,
  getUsersThunkCreator
})(UsersContainer);
