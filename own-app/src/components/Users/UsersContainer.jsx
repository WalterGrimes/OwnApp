import React from "react";
import { connect } from "react-redux";
import { show, hide } from '../redux/users-reducer';
import Users from "./Users";
import Preloader from "../IDK/Preloader/Preloader";

class UsersContainer extends React.Component {  
    componentDidMount() {
        const { currentPage, pageSize, getUsersThunkCreator } = this.props;
        getUsersThunkCreator(currentPage, pageSize);
    }

    // Просто обёртка над getUsersThunkCreator
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
        } = this.props;

        return (
            <>
                {isFetching && <Preloader />}
                <Users 
                    users={users}
                    currentPage={currentPage}
                    allUsersCount={allUsersCount}
                    pageSize={pageSize}
                    onPageChanged={this.onPageChanged} // Передаём метод
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
});

export default connect(mapStateToProps, { 
    show: showUsersItem,
    hide: hideUsersItem,
    setThatFetching: setThatFetching,
    toggleIsShowing,
    getUsersThunkCreator, // Всё управление через этот санк
})(UsersContainer);