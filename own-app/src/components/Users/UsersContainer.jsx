import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { hideUsersItemAC, setUsersAC, showUsersItemAC } from "../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        show: (userId) => {
            dispatch(showUsersItemAC(userId))
        },
        hide: (userId) => {
            dispatch(hideUsersItemAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC)(users)
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Users);