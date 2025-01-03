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
    let NewsData = [
        { id: 1, advantage: 'Protein Maxler' },
        { id: 2, advantage: 'Mezomorf crazy' },
        { id: 3, advantage: 'Creatine blue' },
        { id: 4, advantage: 'Gainer Bucked up' },
    ]

    // Используем правильное свойство "advantage"
    let NewsElements = NewsData
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
