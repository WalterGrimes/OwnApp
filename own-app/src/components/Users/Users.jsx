import React from "react";
import s from "./Users.module.css"; // Переименовываем styles → s

let Users = (props) => {

    
    return (
        <div className={s.usersContainer}>
            {props.users.map(u => {
                return (
                    <div key={u.id} className={s.userCard}>
                        <div className={s.userPhotoContainer}>
                            <img src={u.userPhoto} alt={u.userName} className={s.userPhoto} />
                            <div> 
                                {u.isShown 
                                    ? <button className={s.showButton} onClick={() => props.hideUser(u.id)}>Hide</button> 
                                    : <button className={s.showButton} onClick={() => props.showUser(u.id)}>Show</button>
                                }
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userName}>{u.userName}</div>
                            <div className={s.userStatus}>{u.userStatus}</div>
                            <div className={s.userCity}>{u.city}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
