import Title from "./Title";
import hit1 from "./../assets/hits-img-1.png"
import hit2 from "./../assets/hits-img-2.png"
import hit3 from "./../assets/hits-img-3.png"
import RenderItemsRow from "./RenderItemsRow";
const Hits = () => {

    const hitsList = [
        {id: 0, img: hit1, title: "Кашпо с подсветкой Cubo S", price: "От 8 000 ₽"},
        {id: 1, img: hit2, title: "Кашпо с подсветкой Garda L", price: "От 6 500 ₽"},
        {id: 2, img: hit3, title: "Полусфера Como 500 мм с подсветкой", price: "От 4 500 ₽"},
    ]
    return ( 
        <section className="hits">
            <div className="container">
                <Title title="Хиты продаж"/>
                <div className="hits__wrapper">
                    {hitsList.map((item) => {
                        return (
                            <RenderItemsRow key={item.id} {...item}/>
                        )
                    })}
                    {/* <div className="hits__card">
                        <div className="hits__card-img"></div>
                        <div className="hits__card-title"></div>
                        <div className="hits__card-price"></div>
                    </div> */}
                </div>
            </div>
        </section>
     );
}
 
export default Hits;