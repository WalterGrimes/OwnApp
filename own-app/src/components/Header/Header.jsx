import React from "react";
import s from "./Header.module.css";
import LoginPage from "./LoginPage/Login";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://avatars.mds.yandex.net/i?id=0cabfd4d88785bb87a448bbf767de929ed77174e-10814666-images-thumbs&n=13"
        alt="header logo"
      />
      <LoginPage/>
    </header>
  );
};

export default Header;
