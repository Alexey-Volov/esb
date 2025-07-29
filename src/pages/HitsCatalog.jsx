import Filter from "../components/catalog/Filter";
import HitsCard from "../components/catalog/HitsCard";
import HeaderTop from "../components/mainPageComponents/HeaderTop";
import Title from "../components/mainPageComponents/Title";
import img1 from "./../assets/hitsCatalog/img1.png"
import img2 from "./../assets/hitsCatalog/img2.png"
import img3 from "./../assets/hitsCatalog/img3.png"
import img4 from "./../assets/hitsCatalog/img4.png"
import img5 from "./../assets/hitsCatalog/img5.png"
import img6 from "./../assets/hitsCatalog/img6.png"
import img7 from "./../assets/hitsCatalog/img7.png"
import img8 from "./../assets/hitsCatalog/img8.png"
import img9 from "./../assets/hitsCatalog/img9.png"
import img10 from "./../assets/hitsCatalog/img10.png"
import img11 from "./../assets/hitsCatalog/img11.png"
import { useState } from "react";


const HitsCatalog = () => {

    const categoryList = [
        {title: "Категория"},
        {content: "Скамейки"},
        {content: "Перголы"},
        {content: "Светильники"},
        {content: "Реплики"},
        {content: "Скульптуры"},
        {content: "Вазоны"},
        {content: "Кашпо"},
        {content: "Умная городская мебель"},
        {content: "Качели"},
        {content: "Урны"},
    ]
    
    const hitCards = [
            {title: "Пергола с качелями 'Орион'", price: "248 000 ₽", img: img1},
            {title: "Пергола 'Омега'", price: "124 000 ₽", img: img2},
            {title: "Скамейка 'Варшава'", price: "24 000 ₽", img: img3},
            {title: "Пергола 'Гарда'", price: "260 000 ₽", img: img4},
            {title: "Кашпо с подсветкой Cubo S", price: "8 000 ₽", img: img5},
            {title: "Кашпо сфера Sphere L", price: "От 10 000 ₽", img: img6},
            {title: "Вазон цветочница 'Барселона'", price: "По запросу ₽", img: img7},
            {title: "Пергола Giardino Ring", price: "По запросу ₽", img: img1},
            {title: "Светильник садовый", price: "По запросу ₽ ", img: img8},
            {title: "Пергола-навес 'Валдай'", price: "150 000 ₽", img: img9},
            {title: "Светящийся шар Minge 800 мм", price: "По запросу ₽", img: img10},
            {title: "Пергола Giardino", price: "248 000 ₽", img: img11},
    ]
    
    
    return ( 
        <section className="hits-catalog">
            <div className="container">
                <HeaderTop/>
                <Title title="Каталог -> Хиты продаж"/>
                <div className="hits-catalog__wrapper">
                    <div className="hits-catalog__filter">
                        <ul className="filter">
                            {categoryList.map((item, index) => {
                                return (
                                    
                                    <li key={index} className="filter__item">
                                        {item.title && <h6 className="filter__title">{item.title}</h6>}
                                        {item.content}
                                    </li>
                                )
                            })}
                        </ul>

                        <Filter/>
                        
                    </div>
                    <div className="hits-catalog__cards">
                        <button className="filter-btn">Сначала популярные</button>
                        <HitsCard cards={hitCards}/>
                    </div>
                </div>

                
            </div>


        </section>
    );
}
 
export default HitsCatalog;