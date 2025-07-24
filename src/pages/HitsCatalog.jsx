import Filter from "../components/catalog/Filter";
import HitsCard from "../components/catalog/HitsCard";
import HeaderTop from "../components/mainPageComponents/HeaderTop";
import Title from "../components/mainPageComponents/Title";

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
                        <HitsCard/>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default HitsCatalog;