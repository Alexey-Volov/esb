
import Title from "./Title"
import img1 from "./../../assets/aboutImg1.png"
import img2 from "./../../assets/aboutImg2.png"
import img3 from "./../../assets/aboutImg3.png"
import img4 from "./../../assets/aboutImg4.png"
import AboutCatalog from "./AboutCatalog";


const About = () => {
    const aboutData = [
        {title: "ЕСБ", list: ["Уличная мебель", "Благоустройство", "Умный город", "Строительство объектов"]},
        {img: img1},
        {content: "Производство МАФ по проектам заказчика: \nскамейки из металла, скамейкииз бетона, вазоны, клумбы, цветочницы, урны, парковочные столбики, перголы и парковая скульптура, арт объекты для благоустройства парков, скверов и зелёных зон, с использованием термо-древесины и полимерной доски."},
        {img: img2},
        {img: img3},
        {content: "Благоустройство дворов и детских площадок, работа в сфере создания ландшафтного дизайнаи озеленения, проектирование детских площадок, строительство и возведение МАФ из декоративного бетона."},
        {img: img4},
        {content: "Производство МАФ по проектам заказчика: \nскамейки из металла, скамейкииз бетона, вазоны, клумбы, цветочницы, урны, парковочные столбики, перголы и парковая скульптура, арт объекты для благоустройства парков, скверов и зелёных зон, с использованием термо-древесины и полимерной доски."}
    ]
    return ( 
        <section className="about">
            <div className="container">
                <Title title="О компании"/>
                <div className="about__wrapper">
                    {aboutData.map((item, index) => {
                        const hasImg = !!item.img;
                        return (
                            <div key={index} className={`about__card ${hasImg ? "with-image" : "no-image"}`}>
                                {item.title && <h3>{item.title}</h3>}

                                {item.list && (
                                    <ul>
                                    {item.list.map((li, i) => (
                                        <li key={i}>{li}</li>
                                    ))}
                                    </ul>
                                )}
                                {item.content && <p>{item.content}</p> }
                                {item.img && <img src={item.img} alt="img" /> }
                            </div>
                        )   
                    })}
                </div>
                <AboutCatalog/>
            </div>
            
        </section>
     );
}
 
export default About;