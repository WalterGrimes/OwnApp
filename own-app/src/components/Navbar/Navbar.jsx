import React from "react";
import { NavLink } from "react-router-dom";
import s from '../Navbar/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => isActive ? s.activeClick : undefined}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/messages" 
          className={({ isActive }) => isActive ? s.activeClick : undefined}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/news" 
          className={({ isActive }) => isActive ? s.activeClick : undefined}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/music" 
          className={({ isActive }) => isActive ? s.activeClick : undefined}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => isActive ? s.activeClick : undefined}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
