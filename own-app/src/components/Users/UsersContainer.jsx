import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { hideUsersItemAC, setPageAC, setUsersAC, setAllUsersCountAC, showUsersItemAC } from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        allUsersCount: state.usersPage.allUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        show: (userId) => {
            dispatch(showUsersItemAC(userId));
        },
        hide: (userId) => {
            dispatch(hideUsersItemAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users)); 
        },
        setPage: (pageNumber) =>{
            dispatch(setPageAC(pageNumber) )
        },
        setAllUsersCount: (totalCount) =>{
            dispatch(setAllUsersCountAC(totalCount) )
        }
    };
};





export default connect(mapStateToProps, mapDispatchToProps)(Users);