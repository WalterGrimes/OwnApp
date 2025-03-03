import React, { useEffect } from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../userDetails/photoNotUser/user.jpg";

class Users extends React.Component {
    

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            this.props.setUsers(response.data.items);
        })
        .catch(error => console.error("Ошибка загрузки пользователей:", error));
    }

    render() {
         return (
                <div>
                    <button onClick={this.getUsers}>Get users</button>
                    <div className={s.usersContainer}>
                        {this.props.users.map(u => (
                            <div key={u.id} className={s.userCard}>
                                <div className={s.userPhotoContainer}>
                                    <img src={u.photos?.small ?? u.userPhoto ?? userPhoto} alt={u.userName} className={s.userPhoto} />
                                    <div> 
                                        {u.isShown 
                                            ? <button className={s.showButton} onClick={() =>this.props.hide(u.id)}>Hide</button> 
                                            : <button className={s.showButton} onClick={() => this.props.show(u.id)}>Show</button>
                                        }
                                    </div>
                                </div> 
                                <div className={s.userInfo}>
                                    <div className={s.userName}>{u.userName}</div>
                                    <div className={s.userStatus}>{u.userStatus}</div>
                                    <div className={s.userCity}>{u.city}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
    }
}

export default Users;
