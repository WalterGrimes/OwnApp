import React from "react";
import s from './News.module.css';
import { NavLink } from "react-router-dom";
import NewsItem from "./NewsItem/NewsItem";

const News = (props) => {
    

    // Используем правильное свойство "advantage"
    let NewsElements = props.NewsData
        .map(newP => <NewsItem advantage={newP.advantage} id={newP.id} />)

    return (
        <div>
            <div className={s.News}>
                <div className={s.Newitems}>
                    {NewsElements}
                </div>
            </div>
        </div>
    );
}

export default News;
