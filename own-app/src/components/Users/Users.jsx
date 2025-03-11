import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../userDetails/photoNotUser/user.jpg";

const Users = (props) => {
    let pages = [];

    let sumOfPages = Math.min(10, Math.ceil(props.allUsersCount / props.pageSize));
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
                            <img
                                src={u.photos?.small ?? userPhoto}
                                alt={u.name}
                                className={s.userPhoto}
                            />
                            <div>
                                {u.isShown ? (
                                    <button className={s.showButton} onClick={() => props.hide(u.id)}>Hide</button>
                                ) : (
                                    <button className={s.showButton} onClick={() => props.show(u.id)}>Show</button>
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
