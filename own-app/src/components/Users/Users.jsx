import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../userDetails/photoNotUser/user.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../API/API";

const Users = (props) => {
    let pages = [];
    let sumOfPages = Math.min(100, Math.ceil(props.allUsersCount / props.pageSize));

    for (let i = 1; i <= sumOfPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.paginationContainer}>
                {pages.map((p) => (
                    <span
                        key={p}
                        className={props.currentPage === p ? s.selectedPage : s.pageNumber}
                        onClick={() => props.onPageChanged(p)}
                    >
                        {p}
                    </span>
                ))}
            </div>

            <div className={s.usersContainer}>
                {props.users.map((u) => (
                    <div key={u.id} className={s.userCard}>
                        <div className={s.userPhotoContainer}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos?.small ?? userPhoto}
                                    alt={u.name}
                                    className={s.userPhoto}
                                />
                            </NavLink>
                            <div>
                                {u.isShown ? (
                                    <button 
                                        disabled={props.showingInProgress.some(id => id === u.id)}
                                        className={s.showButton}
                                        onClick={() => {
                                            props.toggleIsShowing(true, u.id); // Исправленное название
                                            usersAPI.hideUsersProduct(u.id)
                                                .then((response) => {
                                                    if (response.resultCode === 0) {
                                                        props.hide(u.id);
                                                    }
                                                    props.toggleIsShowing(false, u.id); // Исправленное название
                                                });
                                        }}
                                    >
                                        Hide
                                    </button>
                                ) : (
                                    <button 
                                        disabled={props.showingInProgress.some(id => id === u.id)}
                                        className={s.showButton}
                                        onClick={() => {
                                            props.toggleIsShowing(true, u.id); // Исправленное название
                                            usersAPI.showUsersProduct(u.id)
                                                .then((response) => {
                                                    if (response.resultCode === 0) {
                                                        props.show(u.id);
                                                    }
                                                    props.toggleIsShowing(false, u.id); // Исправленное название
                                                });
                                        }}
                                    >
                                        Show
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className={s.userInfo}>
                            <div className={s.userName}>{u.name}</div>
                            <div className={s.userStatus}>{u.status ?? "Нет статуса"}</div>
                            <div className={s.userCity}>{"Город не указан"}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;