
const HitsCard = ({cards}) => {
    return ( 
        <div className="hits-catalog__grid">
            {cards.map((item, index) => {
                return (
                    <div key={index} className="hits-catalog__item">
            
                    <img src={item.img} alt={item.title} />
                    <div className="hits-catalog__item-content">
                        <h4>{item.title}</h4>
                        <div className="hits-catalog__item-price">
                            <p>{item.price}</p>
                            <button >Подробнее</button>
                        </div>
                    </div>  
                </div>
                )
            })}      
        </div>
        
        
     );
}
 
export default HitsCard;