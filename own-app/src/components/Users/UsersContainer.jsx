import React from "react";
import { connect } from "react-redux";
import { hideUsersItemAC, setPageAC, setUsersAC, setAllUsersCountAC, showUsersItemAC, setThatFetchingAC } from "../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../IDK/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setThatFetching(true); // Исправлено
        this.onPageChanged(this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        console.log("Загружаем пользователей для страницы:", pageNumber);
        
        this.props.setThatFetching(true); // Включаем прелоадер перед запросом

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setThatFetching(false); // Выключаем прелоадер после ответа
                this.props.setUsers(response.data.items);
                this.props.setAllUsersCount(response.data.totalCount);
                this.props.setPage(pageNumber);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching && (
                   <Preloader/>
                )}
                <Users 
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    allUsersCount={this.props.allUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    show={this.props.show}
                    hide={this.props.hide}
                />
            </>
        );
    }
}
    

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    allUsersCount: state.usersPage.allUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});

let mapDispatchToProps = (dispatch) => ({
    show: (userId) => dispatch(showUsersItemAC(userId)),
    hide: (userId) => dispatch(hideUsersItemAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)), 
    setPage: (pageNumber) => dispatch(setPageAC(pageNumber)),
    setAllUsersCount: (totalCount) => dispatch(setAllUsersCountAC(totalCount)),
    setThatFetching: (isFetching) => dispatch(setThatFetchingAC(isFetching)) // Исправлено
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
