import Title from "./Title";

const benList = [
    {id: 0, benTitle: "1. Собственное производство", benContent: "От этого зависит стоимость изделий. Возможность изготовления по техническому заданию и проекту заказчика."},
    {id: 1, benTitle: "2. Дизайн проект", benContent: "Может быть полностью ваш или доработан после консультации наших дизайнеров."},
    {id: 2, benTitle: "3. Гарантия и обслуживание", benContent: "На все изделия мы даем гарантию пять лет. Берем на себя обслуживание смарт объектов."},
    {id: 3, benTitle: "4. Доставка и монтаж", benContent: "Для удаленных объектов и удобства монтажа мы изготавливаем сборно-разборные МАФ и арт объекты, что экономит время и средства"},
    {id: 4, benTitle: "5. Специалисты своего дела", benContent: "Мы за разделение труда. Над каждым проектом работают специалисты узкого профиля."},
    {id: 5, benTitle: "6. Оплата", benContent: "Производится согласно договора по предоплате в несколько этапов."},
]
const renderList = benList.map((item) => {
    return (
        <div key={item.id} className="benefits__item">
            <div className="benefits__title">
                <h4>{item.benTitle}</h4>
            </div>
            <div className="benefits__content">
                <p>{item.benContent}</p>
            </div>
        </div>
    )
})
const Benefits = () => {
    return ( 
        <section className="benefits">
            <div className="container">
                <Title title="Преимущества"/>
                <div className="benefits__wrapper">
                    {renderList}
                </div>
            </div>
        </section>
     );
}
 
export default Benefits;