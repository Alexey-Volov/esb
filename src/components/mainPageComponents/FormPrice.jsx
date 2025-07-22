const FormPrice = ({title, text, secontText}) => {
    return ( 
        <section className="form-price">
            <div className="container">
                <div className="form-price__wrapper">
                    <div className="form-price__top">
                        {/* <h4>Рассчитать стоимость</h4> */}
                        <h4>{title}</h4>
                        {/* <p>Оставьте заявку на бесплатный рассчет стоимости Вашего проекта!</p> */}
                        <p>{text}</p>
                        {secontText && <p>{secontText}</p>}
                    </div>
                    <div className="form-price__bottom">
                        <div className="form-price__inputs">
                            <input type="text" placeholder="Ваше имя"/>
                            <input type="text" placeholder="Ваш телефон"/>
                        </div>
                        <button className="form-price__btn">Рассчитать стоимость</button>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default FormPrice;