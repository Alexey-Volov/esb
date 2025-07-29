import Title from "./Title";
import ArrowD from "./../../assets/arrow-newItems.svg";
import newImg1 from "./../../assets/newImg-1.png"
import newImg2 from "./../../assets/newImg-2.png"
import newImg3 from "./../../assets/newImg-3.png"
import RenderItemsRow from "./RenderItemsRow";


const NewItems = ({title}) => {

    const newItemsList = [
        {id: 0, title: 'Пергола с качелями "Орион"', price: "248 000 ₽", img: newImg1},
        {id: 1, title: 'Скамейка Plate Garda с подсветкой', price: "124 000 ₽", img: newImg2},
        {id: 2, title: 'Пергола Giardino', price: "480 000 ₽", img: newImg3},
    ]
    return ( 
        <section className="newItems">
            <div className="container">
                <Title title={title}/>
                <div className="newItems__row">
                    {/* {renderNewItemsList} */}
                    {newItemsList.map((item) => {
                        return (
                            <RenderItemsRow key={item.id} {...item}/>
                        )
                    })}
                
                </div>
            </div>

        </section>
     );
}
 
export default NewItems;