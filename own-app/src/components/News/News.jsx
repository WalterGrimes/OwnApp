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

    let NewsData =[
        {id: 1, advantage : 'Protein Maxler' },
        {id: 2, advantage : 'Mezomorf crazy'},
        {id: 3, advantage : 'Creatine blue'},
        {id: 4, advantage : 'Gainer Bucked up'},
    ]


    return (
        <div>
            <div className={s.News}>
                <div className={s.Newitems}>
                    <NewsItem advantage={NewsData[0].name} id={NewsData[0].id} />
                    <NewsItem advantage={NewsData[1].name} id={NewsData[1].id} />
                    <NewsItem advantage='Creatine blue' id='3' />
                    <NewsItem advantage='Gainer Bucked up' id='4' />
                  
                </div>
            </div>
        </div>
    );
}

export default News;
