import React from "react";
import { connect } from "react-redux";
import { hideUsersItemAC, setPageAC, setUsersAC, setAllUsersCountAC, showUsersItemAC, setThatFetchingAC } from "../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../IDK/Preloader/Preloader";

class UsersContainer extends React.Component {  
    componentDidMount() {
        this.props.setThatFetching(true);
        this.onPageChanged(this.props.currentPage);
    }

    onPageChanged = (pageNumber) => {
        console.log("Загружаем пользователей для страницы:", pageNumber);
        
        this.props.setThatFetching(true);

        axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        withCredentials: true
    })
    .then(response => {
        this.props.setThatFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setAllUsersCount(response.data.totalCount);
        this.props.setPage(pageNumber);
    })
    // .catch(error => {
    //     this.props.setThatFetching(false);
    //     console.error("Ошибка при загрузке пользователей:", error);
    // });

    };

    render() {
        console.log(this.props.users)
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
    isFetching: state.usersPage.isFetching
});

// Вместо mapDispatchToProps передаём объект с action creators
export default connect(mapStateToProps, { 
    show: showUsersItemAC,
    hide: hideUsersItemAC,
    setUsers: setUsersAC,
    setPage: setPageAC,
    setAllUsersCount: setAllUsersCountAC,
    setThatFetching: setThatFetchingAC 
})(UsersContainer);
