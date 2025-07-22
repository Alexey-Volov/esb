import ArrowD from "./../../assets/arrow-newItems.svg"
const RenderItemsRow = ({id, img, title, price}) => {
    return ( 
        <div key={id} className="newItems__card">
            <div className="newItems__card-img">
                <img src={img} alt="img" />
            </div>
            <div className="newItems__card-content">
                <div className="newItems__card-title">
                    <h5>{title}</h5>
                </div>
                <div className="newItems__card-price">
                    <span>{price}</span>
                    <a href="#">
                        <img src={ArrowD} alt="more" />
                    </a>
                </div>
            </div>
            
        </div>
     );
}
 
export default RenderItemsRow;