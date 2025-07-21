import Title from "./Title";

const Realized = () => {
    const cardList = [
        {id: 0, classes: "realized__card realized__card--img-1", content: "Благоустройство"},
        {id: 1, classes: "realized__card realized__card--img-2", content: "Строительство объектов"},
        {id: 2, classes: "realized__card realized__card--img-3", content: "Уличная мебель"},
    ]
    return ( 
        <section className="realized">
            <div className="container-right">
                <Title title="Реализованные проекты"/>
                <div className="realized__wrapper">
                    {cardList.map((item) => {
                        return (
                            <div key={item.id} className={item.classes}>
                                <div className="realized__card-content">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
     );
}
 
export default Realized;