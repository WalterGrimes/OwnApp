import React from "react";
import s from './NewsItem.module.css';
import { NavLink } from "react-router-dom";

// Подкомпонента для отображения преимущества
const NewsItem = (props) => {
    let path = '/news/' + props.id;

    return (
        <div className={s.newproduct}>
            <NavLink to={path}>{props.advantage}</NavLink>
        </div>
    );
}


export default NewsItem;
