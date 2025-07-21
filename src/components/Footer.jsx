import footerData from "../jsData/footerData";
import FooterDoubleList from "./FooterDoubleList";

import FooterList from "./FooterList";
import HeaderTop from "./HeaderTop";

const Footer = () => {

    

    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <HeaderTop/>
                    <div className="footer__col-wrap">
                        {footerData.map((col, index) => {
                            if(col.type === "double") {
                                return <FooterDoubleList key={index} items={col.items}/>
                            }
                            return <FooterList key={index} title={col.title} items={col.items}/>

                        })}
                    </div>
                    <div className="footer__privacy">
                        <div className="footer__privacy-text">
                            <h6>(с) ЕСБ, 2023. Все права защищены.</h6>
                        </div>
                        <div className="footer__privacy-link">
                            <a href="#">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;