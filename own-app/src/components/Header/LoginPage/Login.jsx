import React from "react";
import s from "../Header.module.css"
import { NavLink } from "react-router-dom";

const LoginPage = (props) => {
    return (
        <div>
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <>
                        {props.photo ? (
                            <>
                                <img src={props.photo} alt="avatar" className={s.avatar} />
                                {props.login}
                            </>
                        ) : (
                            props.login
                        )}

                    </>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
            <h2>Login Page</h2>
            <p>Здесь будет форма входа</p>
        </div>
    );
};

export default LoginPage;


