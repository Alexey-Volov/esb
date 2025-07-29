import { useState } from "react";
import Title from "./mainPageComponents/Title";

const Accordeon = () => {

    const [accList, setAccList] = useState([
        {id: 0, active: false, title: "Насколько прочной получится конструкция с использованием подпорных стенок?", text: "accordion text 1"},
        {id: 1, active: false, title: "Насколько прочной получится конструкция с использованием подпорных стенок?", text: "accordion text 2"},
        {id: 2, active: false, title: "Насколько прочной получится конструкция с использованием подпорных стенок?", text: "accordion text 3"}
    ])
    const toggleAcc = (id) => {
        setAccList(prev => prev.map(item => item.id === id ? {...item, active: !item.active} : {...item, active: false}))
    }
    return ( 
        <>
            <section className="accordion-test">
                <div className="container">
                    <Title title="Ответы на частые вопросы"/>
                    <div className="accordion__inner">
                        {accList.map((item, i) => {
                            return (
                                <div onClick={()=>{toggleAcc(item.id)}} key={item.id} className="accordion__item">
                                    <button  className={item.active ? "accordion active" : "accordion"}>
                                        {item.title}
                                    </button>
                                    {item.active && (<p className="accordion__content">{item.text}</p>)}
                                    
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </section>
              
        </>
     );
}
 
export default Accordeon;