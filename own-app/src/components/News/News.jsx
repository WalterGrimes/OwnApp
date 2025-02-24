import React from "react";
import s from './News.module.css';
import NewsItem from "./NewsItem/NewsItem";

const News = (props) => {
    if (!props.NewsData || !props.NewsData.NewsData) {
        return <div>Данных нет</div>; // Заглушка, если данные не пришли
    }

    let NewsElements = props.NewsData.NewsData.map(newP => 
        <NewsItem advantage={newP.advantage} id={newP.id} />
    );

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
