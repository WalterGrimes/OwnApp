import React from "react";
import s from './News.module.css';
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

const News = () => {
    return (
        <div>
            <div className={s.News}>
                <div className={s.Newitem}>
                    <NewsItem advantage='Protein Maxler' id='1' />
                    <NewsItem advantage='Mezomorf crazy' id='2' />
                    <NewsItem advantage='Creatine blue' id='3' />
                    <NewsItem advantage='Gainer Bucked up' id='4' />
                  
                </div>
            </div>
        </div>
    );
}

export default News;
