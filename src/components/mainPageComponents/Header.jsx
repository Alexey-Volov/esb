import Logo from "./../../assets/logo.svg";
import Tg from "./../../assets/tg.svg";
import Wt from "./../../assets/whatsapp.svg";

import btnArrow from "./../../assets/btnArrow.svg";
import btnGreen from "./../../assets/btnGreen.svg";
import BtnCall from "../btns/BtnCall";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <HeaderTop/>
                    
                    <div className="header__bottom">
                        <div className="header__boxes">
                            <div className="header__boxes-title">
                                <h1>Производим уличную мебель с гарантией 5 лет</h1>
                            </div>
                            <div className="header__boxes-content">
                                <div className="header__boxes-text">
                                    <p>Наша компания предлагает услуги по производство МАФ, а так же изделий из архитектурного бетона и термо-древесины.</p>
                                    <p>Индивидуальное изготовление, собственное производство, широкий ассортимент, гарантия и обслуживание смарт-объектов, удобные способы оплаты и доставки</p>
                                </div>
                                <div className="header__boxes-btn">
                                    <a href="#">
                                        <img src={btnArrow} alt="more" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header__boxes box-black">
                            <div className="header__boxes-title">
                                <h3>Смотреть каталог</h3>
                            </div>
                            <div className="header__boxes-content">
                                <div className="header__boxes-text">
                                    <p>Более 240 наименований товаров.</p>
                                    <p>Широкий ассортименти приятные цены!</p>
                                </div>
                                <div className="header__boxes-btn">
                                    <a href="#">
                                        <img src={btnGreen} alt="more" />
                                    </a>                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;