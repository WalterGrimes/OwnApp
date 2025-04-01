import React from "react";
import { connect } from "react-redux";
import { 
  hideUsersItemAC, 
  setPageAC, 
  setUsersAC, 
  setAllUsersCountAC, 
  showUsersItemAC, 
  setThatFetchingAC, 
  toggleIsShowing 
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../IDK/Preloader/Preloader";
import { usersAPI } from "../../API/API";

class UsersContainer extends React.Component {  
    componentDidMount() {
        this.props.setThatFetching(true);
        this.onPageChanged(this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        this.props.setThatFetching(true);
        
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setThatFetching(false);
                this.props.setUsers(data.items);
                this.props.setAllUsersCount(data.totalCount);
                this.props.setPage(pageNumber);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users 
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    allUsersCount={this.props.allUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    show={this.props.show}
                    hide={this.props.hide}
                    toggleIsShowing={this.props.toggleIsShowing} // Правильное название пропса
                    showingInProgress={this.props.showingInProgress}
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
});

export default connect(mapStateToProps, { 
    show: showUsersItemAC,
    hide: hideUsersItemAC,
    setUsers: setUsersAC,
    setPage: setPageAC,
    setAllUsersCount: setAllUsersCountAC,
    setThatFetching: setThatFetchingAC,
    toggleIsShowing // Синхронизировано с названием в Users
})(UsersContainer);