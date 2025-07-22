const ContactsCity = () => {
    const city = [
            {id: 0, city: "г. Москва, ул. Бутлерова 17", active: true},
            {id: 1, city: "г. Симферополь, ул. Комсомольская 1", active: false},
            {id: 2, city: "г. Краснодар, ул. Валерия Гассия 6", active: false},
            {id: 3, city: "г. Сочи, ул. Виноградная 20А", active: false},
            {id: 4, city: "г. Ростов на Дону, ул. Обороны 42Б", active: false},
            {id: 5, city: "г. Хабаровск, ул. Карла Маркса 96А", active: false},
            {id: 6, city: "г. Владивосток, ул. Некрасовская 36Б", active: false},
        ]
    return ( 
        <ul>
            {city.map((item) => {
                return (
                    <li className={item.active ? "contacts__city-item city-active" : "contacts__city-item"} key={item.id}>{item.city}</li>
                )
            })}
        </ul>
     );
}
 
export default ContactsCity;