import btnGreen from "./../assets/btnGreen.svg"
const AboutCatalog = () => {
    return ( 
        <div className="about__catalog">
            <div className="about__title">
                <h5>Смотреть каталог</h5>
            </div>
            <div className="about__text">
                <div className="about__text-left">
                    <p>Более 240 наименований товаров.</p>
                    <p>Широкий ассортимент и приятные цены!</p>
                </div>
                <div className="about__text-right">
                    <a href="#">
                        <img src={btnGreen} alt="more" />
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default AboutCatalog;