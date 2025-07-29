import HeaderTop from "../mainPageComponents/HeaderTop";
import Title from "../mainPageComponents/Title";
import img1 from "./../../assets/cards/1.png";
import img2 from "./../../assets/cards/2.png";
import img3 from "./../../assets/cards/3.png";
import img4 from "./../../assets/cards/4.png";
import Reccomend from "./Reccomend";
const Card = () => {
    return ( 
        <section className="section-card">
            <div className="container">
                <HeaderTop/>
                <Title title='Пергола с качелями "Орион"'/>
                <div className="wrapper">
                    <div className="wrapper__cards">
                        <div className="card__img-main">
                            <img src={img1} alt="img" />
                        </div>
                        <div className="card__img-thumbs">
                            <img src={img2} alt="1" />
                            <img src={img3} alt="2" />
                            <img src={img4} alt="3" />
                            <div className="card__img-thumbs--empty"></div>
                            <div className="card__img-thumbs--empty"></div>
                        </div>
                    </div>

                    <div className="card__content">
                        <div className="card__content-top">
                            <div className="card__desc">
                                <h5>Описание товара</h5>
                            </div>
                            <div className="card__content">
                                <p>Светящиеся качели Solo – это оригинальное решение для уличного благоустройства с иллюминацией. Различные варианты цветового украшение, задают настроение. Отличный вариант для благоустройства дворовой территории или парковой зоны. Все материалы отличного качества и сделаныв соответствии к требованиям ГОСТа. Если вы действительно желаете удивить или привлечь внимание, то качели Solo это именно ваш вариант.</p>
                            </div>
                            <div className="card__char">
                                <h5>Характеристика товара</h5>
                            </div>
                            <ul className="card__content-list">
                                <li className="card__content-item">Комплектация: световые</li>
                                <li className="card__content-item">Крепление: вращающееся на 360°</li>
                                <li className="card__content-item">Вес: 35 кг</li>
                                <li className="card__content-item">Питание 12 V</li>
                                <li className="card__content-item">Подсветка: белая, RGB/W</li>
                                <li className="card__content-item">Габариты: 1480х1070х430</li>
                                <li className="card__content-item">Количество ламп: 1</li>
                                <li className="card__content-item">Материал: металл, полиэтилен</li>
                                <li className="card__content-item">Герметизация: IP 65</li>
                                <li className="card__content-item">Форма: кольцо</li>
                                <li className="card__content-item">Производитель: Pillars г. Екатеринбург</li>
                            </ul>
                        </div>
                        <div className="card__content-bottom">
                            <div className="card__price">
                                <span>8 000 ₽</span>
                                <div className="card__price-btns">
                                    <div className="card__quantify">
                                        <button>-</button>
                                        <span>0</span>
                                        <button>+</button>
                                    </div>
                                    <button className="card__content-buy">Купить</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <Reccomend/>
            </div>
            
        </section>
     );
}
 
export default Card;