import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../userDetails/photoNotUser/user.jpg";

class Users extends React.Component {
    componentDidMount() {
        this.onPageChanged(1);
    }


    onPageChanged = (pageNumber) => {
        console.log("Кликнули на страницу:", pageNumber);
        this.props.setPage(pageNumber);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setAllUsersCount(response.data.totalCount);
            });
    };



    render() {

        let pages = []; // Объявляем до return, чтобы не было ошибки
    
        let sumOfPages = Math.min(10, Math.ceil(this.props.allUsersCount / this.props.pageSize));
        console.log("Общее количество пользователей:", this.props.allUsersCount);
console.log("Количество страниц:", sumOfPages);

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
                            className={this.props.currentPage === p ? s.selectedPage : s.pageNumber}
                            onClick={() => this.onPageChanged(p)}
                        >
                            {p}
                        </span>
                    ))}
                </div>
    
                <div className={s.usersContainer}>
                    {this.props.users.map(u => (
                        <div key={u.id} className={s.userCard}>
                            <div className={s.userPhotoContainer}>
                                <img
                                    src={u.photos?.small ?? userPhoto}
                                    alt={u.name}
                                    className={s.userPhoto}
                                />
                                <div>
                                    {u.isShown ? (
                                        <button className={s.showButton} onClick={() => this.props.hide(u.id)}>Hide</button>
                                    ) : (
                                        <button className={s.showButton} onClick={() => this.props.show(u.id)}>Show</button>
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
    }
}    

export default Users;
