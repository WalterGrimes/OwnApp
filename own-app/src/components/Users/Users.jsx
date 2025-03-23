import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../userDetails/photoNotUser/user.jpg";
import { data, NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    console.log(data)
    let pages = [];

    let sumOfPages = Math.min(100, Math.ceil(props.allUsersCount / props.pageSize));
    console.log("Общее количество пользователей:", props.allUsersCount);
    console.log("Количество страниц:", sumOfPages);

    for (let i = 1; i <= sumOfPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.paginationContainer}>
                {pages.map(p => (
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
                {props.users.map(u => (
                    <div key={u.id} className={s.userCard}>
                        <div className={s.userPhotoContainer}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos?.small ?? userPhoto}
                                    alt={u.name}
                                    className={s.userPhoto}
                                /></NavLink>
                            <div>
                                {u.isShown ? (
                                    <button
                                        className={s.showButton}
                                        onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'b41f7840-c3b4-49f4-a1a0-52bb59d4ebaf',
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.show(u.id);
                                                    }
                                                });
                                        }}
                                    >
                                        Hide
                                    </button>

                                ) : (
                                    <button
                                        className={s.showButton}
                                        onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'b41f7840-c3b4-49f4-a1a0-52bb59d4ebaf',
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.show(u.id)
                                                    }
                                                })
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
