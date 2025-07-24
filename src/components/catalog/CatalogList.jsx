import Title from "./../mainPageComponents/Title"
import HeaderTop from "../mainPageComponents/HeaderTop";
import img1 from "./../../assets/catalogItems/1.png"
import img2 from "./../../assets/catalogItems/2.png"
import img3 from "./../../assets/catalogItems/3.png"
import img4 from "./../../assets/catalogItems/4.png"
import img5 from "./../../assets/catalogItems/5.png"
import img6 from "./../../assets/catalogItems/6.png"
import img7 from "./../../assets/catalogItems/7.png"
import img8 from "./../../assets/catalogItems/8.png"
import img9 from "./../../assets/catalogItems/9.png"
import img10 from "./../../assets/catalogItems/10.png"
import FormPrice from "../mainPageComponents/FormPrice";
import { Link } from "react-router-dom";
const CatalogList = () => {
    const catalogItems = [
        {id: 0, content: "Скамейки", active: false, img: img1},
        {id: 1, content: "Светильники", active: false, img: img2},
        {id: 2, content: "Перголы", active: false, img: img3},
        {id: 3, content: "Реплики техники", active: false, img: img4},
        {id: 4, content: "Скульптуры", active: false, img: img5},
        {id: 5, content: "Вазоны", active: false, img: img6},
        {id: 6, content: "Кашпо", active: false, img: img7},
        {id: 7, content: "Умный город", active: false, img: img8},
        {id: 8, content: "Качели", active: false, img: img9},
        {id: 9, content: "Урны", active: false, img: img10},
        {id: 10, content: "Хиты продаж", active: true, link: true},
        {id: 11, content: "Новинки", active: true},
    ]
    
    return ( 
        
        <section className="catalog-list">
            
            <div className="container">
                <HeaderTop/>
                <Title title="Каталог"/>
                <div className="catalog-list__wrapper">
                    {catalogItems.map((item) => {
                        const isLink = item.link ? <Link className={item.active ? "catalog-list__text catalog-list__text--active" : "catalog-list__text"} to="/hitsCatalog">{item.content}</Link> : <p className={item.active ? "catalog-list__text catalog-list__text--active" : "catalog-list__text"}>{item.content}</p>;
                        return (
                            <div key={item.id} className="catalog-list__card">
                                {item.img && <img src={item.img} alt="img"/>}
                                {isLink}
                            </div>
                        )
                        
                    })}
                </div>
                <FormPrice title="Рассчитать стоимость" text="Оставьте заявку и мы поможем подобрать товары из каталога или обсудим детали индивидуального заказа"/>
            </div>
        </section>
        
     );
}
 
export default CatalogList;